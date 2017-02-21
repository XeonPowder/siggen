<template>
  <div class="signature">
    <div id="left">
      <h2>Input</h2>
      <div class="optionbox">
        <span v-for="option in options">
          <span v-if="option.name === 'image'">
            <button v-show="signature.layout.selection === 'Image'" @click="currentTab = option.name">{{option.value}}</button>
          </span>
          <span v-else-if="option.name === 'user'">
            <button @click="currentTab = option.name">{{option.value}}<required v-show="!filledOutRequired"></required></button>
          </span>
          <span v-else>
            <button @click="currentTab = option.name">{{option.value}}</button>
          </span>
        </span>
      </div>
      <transition name="fade" mode="out-in">
        <div class="optiondata" key="company" v-if="currentTab === 'company'">
          <table style="width: 100%;">
            <tr>
              <td style="width: 45%;">
                <input style="width: 85%;" v-model="signature.company.name.value" type="text" placeholder="Company Name"/><br>
                <input style="width: 85%;" v-model="signature.company.website.value" type="text" placeholder="Company Website URL"/><br>
                <input style="width: 85%;" v-model="signature.company.position.value" type="text" placeholder="Position Name">
              </td>
              <td style="width: 45%;">
                <input style="width: 50%;" id="cp-company-name" type="color" class="button" v-model="signature.company.name.color"/><br>
                <input style="width: 50%;" id="cp-company-webiste" type="color" class="button" v-model="signature.company.website.color"/><br>
                <input style="width: 50%;" id="cp-name-title" type="color" class="button" v-model="signature.company.position.color"/>
              </td>
            </tr>
          </table>
        </div>
        <div class="optiondata" key="user" v-else-if="currentTab === 'user'">
        <table style="width: 100%;">
          <tr>
            <td style="width: 45%;">
              <input style="width: 85%;" type="text" v-model="signature.user.name.first.value" placeholder="First Name"><required v-show="signature.user.name.first.value === null || signature.user.name.first.value === ''"></required><br>
              <input style="width: 85%;" type="text" v-model="signature.user.name.middle.value" placeholder="Middle Name"><br>
              <input style="width: 85%;" type="text" v-model="signature.user.name.last.value" placeholder="Last Name"><br>
              <input style="width: 85%;" type="text" v-model="signature.user.email.value" placeholder="Email Address"><required v-show="!valid('email', signature.user.email.value)"></required><br>
              <input style="width: 85%;" type="text" v-model="signature.user.phone.mobile.value" placeholder="Phone (Mobile)"><br>
              <input style="width: 85%;" type="text" v-model="signature.user.phone.direct.value" placeholder="Phone (Direct)">
            </td>
            <td style="width: 45%;">
              <input style="width: 50%;" id="cp-name-first" type="color" v-model="signature.user.name.first.color"/><br>
              <input style="width: 50%;" id="cp-name-last" type="color" v-model="signature.user.name.middle.color"/><br>
              <input style="width: 50%;" id="cp-name-middle" type="color" v-model="signature.user.name.last.color"/><br>
              <input style="width: 50%;" id="cp-email" type="color" v-model="signature.user.email.color"/><br>
              <input style="width: 50%;" id="cp-phone-mobile" type="color" v-model="signature.user.phone.mobile.color"/><br>
              <input style="width: 50%;" id="cp-phone-direct" type="color" v-model="signature.user.phone.direct.color"/>
            </td>
          </tr>
        </table>
        </div>
        <div class="optiondata" key="image" v-else-if="currentTab === 'image' && signature.layout.selection === 'Image'">
          <input style="width: 85%;" v-model="signature.image.value" placeholder="Image URL" type="text">
        </div>
        <div class="optiondata" key="font" v-else-if="currentTab === 'font'">
          <select style="width: 85%;" class="button" v-model="signature.font.family">
            <option v-for="font in signature.font.list">{{font}}</option>
          </select>
        </div>
        <div class="optiondata" key="links" v-else-if="currentTab === 'links'">
          <input style="width: 85%;" v-model="signature.links.facebook.value" placeholder="Facebook Link" type="text">&nbsp;
          <input style="width: 85%;" v-model="signature.links.linkedin.value" placeholder="Linkedin Link" type="text">&nbsp;
          <input style="width: 85%;" v-model="signature.links.twitter.value" placeholder="Twitter Link" type="text">&nbsp;
          <input style="width: 85%;" v-model="signature.links.github.value" placeholder="Github Link" type="text">&nbsp;
        </div>
        <div class="optiondata" key="layout" v-else-if="currentTab === 'layout'">
          <select style="width: 85%;" class="button" v-model="signature.layout.selection">
            <option v-for="layout in signature.layout.list">{{layout.name}}</option>
          </select>
          <div v-if="signature.layout.selection === 'Image'">
            <input v-model="signature.divider.value" id="checkbox-1" class="checkbox-custom" type="checkbox">
            <label for="checkbox-1" class="checkbox-custom-label">Use Divider</label>
            <input style="width: 20%;" v-show="signature.divider.value" id="cp-divider" type="color" class="button" v-model="signature.divider.color"/>
          </div>
        </div>
      </transition>
    </div>
    <div id="right">
      <h2>Preview</h2>
      <div>
        <span v-if="!filledOutRequired"><h3 style="color: #FFFFFF;">Please fill out required fields. <span style="font-size: 32px; color: black;">( * )</span></h3></span>
        <div class="preview" style="text-align: left !important;" v-else>
          <div id="preview">
            <div v-if="signatureData.layout.selection === 'Simple'" :style="{'font-family': signatureData.font.family }">
              <div id="sig-name">
                <span :style="{ 'font-size': '12px', 'color': signatureData.user.name.first.color, 'font-weight': 'bold' }" id="sig-name-first">{{signatureData.user.name.first.value}}</span>
                <span style="font-size: 12px;" v-show="signatureData.user.name.middle.value !== undefined && signatureData.user.name.middle.value !== null && signatureData.user.name.middle.value !== ''"><span :style="{ 'color': signatureData.user.name.middle.color, 'font-weight': 'bold' }" id="sig-name.middle">{{signatureData.user.name.middle.value}}</span></span>
                <span style="font-size: 12px;" v-show="signatureData.user.name.last.value !== undefined && signatureData.user.name.last.value !== null && signatureData.user.name.last.value !== ''"><span :style="{ 'color': signatureData.user.name.last.color, 'font-weight': 'bold' }" id="sig-name-last">{{signatureData.user.name.last.value}}</span></span>
                <span style="font-size: 12px;" v-show="signatureData.company.position.value !== undefined && signatureData.company.position.value !== null && signatureData.company.position.value !== ''">| <span :style="{ 'color': signatureData.company.position.color, 'font-weight': 'bold' }">{{signatureData.company.position.value}}</span></span>
                <br>
              </div>
              <div id="sig-phone" v-show="(signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== '') || (signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== '')">
                <span style="font-size: 10px;" v-show="signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== ''">M: <span :style="{ 'color': signatureData.user.phone.mobile.color }">{{signatureData.user.phone.mobile.value}}</span></span>
                <span style="font-size: 10px;" v-show="signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== '' && signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''">| </span>
                <span style="font-size: 10px;" v-show="signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''">D: <span :style="{ 'color': signatureData.user.phone.direct.color }">{{signatureData.user.phone.direct.value}}</span></span>
              </div>
              <div v-show="signatureData.user.email.value !== undefined && signatureData.user.email.value !== null && signatureData.user.email.value !== ''">
                <a id="sig-email" :style="{ 'font-size': '10px', 'color': signatureData.user.email.color }" :href="mailTo">{{signatureData.user.email.value}}</a>
                <br>
              </div>
              <div id="sig-company" v-show="(signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '') || (signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== '')">
                <a v-if="signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '' && signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.name.color }" :href="signatureData.company.website.value">{{signatureData.company.name.value}}</a>
                <span v-else-if="signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.name.color }">{{signatureData.company.name.value}}</span>
                <a v-else-if="signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.website.color }" :href="signatureData.company.website.value">{{signatureData.company.website.value}}</a>
                <br v-show="(signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '') || (signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== '')">
              </div>
              <div id="sig-social" v-show="(signatureData.links.facebook.value !== null && signatureData.links.facebook.value !== '') || (signatureData.links.twitter.value !== null && signatureData.links.twitter.value !== '') || (signatureData.links.linkedin.value !== null && signatureData.links.linkedin.value !== '') || (signatureData.links.github.value !== null && signatureData.links.github.value !== '')">
                <a v-for="link in signatureData.links" v-show="link.value !== undefined && link.value !== null && link.value !== ''" :href="link.value">
                  <img style="padding-top: 5px; margin-right: 2px; width: 32px;" v-if="link.site === 'Facebook'" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-32.png" alt="Facebook"><img style="padding-top: 5px; margin-right: 2px; width: 32px;" v-if="link.site === 'Twitter'" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-32.png" alt="Twitter"><img style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Linkedin'" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/linked_in_online_social_media-32.png" alt="Linkedin"><img style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Github'" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-32.png" alt="Github"></a>
              </div>
            </div>
            <table v-else="signatureData.layout.selection === 'Image'" :style="{ 'text-align': 'left', 'font-family': signatureData.font.family }">
              <tr>
                <td :style="leftTableStyle()">
                  <span id="sig-image">
                    <a :href="signatureData.company.website.value">
                    <img style="padding: 0 15px;" :src="signatureData.image.value" alt="Image" :width="signatureData.image.width" :height="signatureData.image.height" /></a>
                  </span>
                </td>
                <td style="vertical-align:middle; text-align: left; padding-left: 15px;">
                  <div id="sig-name">
                    <span :style="{ 'font-size': '12px', 'color': signatureData.user.name.first.color, 'font-weight': 'bold' }" id="sig-name-first">{{signatureData.user.name.first.value}}</span>
                    <span style="font-size: 12px;" v-show="signatureData.user.name.middle.value !== undefined && signatureData.user.name.middle.value !== null && signatureData.user.name.middle.value !== ''"><span :style="{ 'color': signatureData.user.name.middle.color, 'font-weight': 'bold' }" id="sig-name.middle">{{signatureData.user.name.middle.value}}</span></span>
                    <span style="font-size: 12px;" v-show="signatureData.user.name.last.value !== undefined && signatureData.user.name.last.value !== null && signatureData.user.name.last.value !== ''"><span :style="{ 'color': signatureData.user.name.last.color, 'font-weight': 'bold' }" id="sig-name-last">{{signatureData.user.name.last.value}}</span></span>
                    <span style="font-size: 12px;" v-show="signatureData.company.position.value !== undefined && signatureData.company.position.value !== null && signatureData.company.position.value !== ''">| <span :style="{ 'color': signatureData.company.position.color, 'font-weight': 'bold' }">{{signatureData.company.position.value}}</span></span>
                    <br>
                  </div>
                  <div id="sig-phone" v-show="(signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== '') || (signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== '')">
                    <span style="font-size: 10px;" v-show="signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== ''">M: <span :style="{ 'color': signatureData.user.phone.mobile.color }">{{signatureData.user.phone.mobile.value}}</span></span>
                    <span style="font-size: 10px;" v-show="signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== '' && signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''">| </span>
                    <span style="font-size: 10px;" v-show="signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''">D: <span :style="{ 'color': signatureData.user.phone.direct.color }">{{signatureData.user.phone.direct.value}}</span></span>
                  </div>
                  <div v-show="signatureData.user.email.value !== undefined && signatureData.user.email.value !== null && signatureData.user.email.value !== ''">
                    <a id="sig-email" :style="{ 'font-size': '10px', 'color': signatureData.user.email.color }" :href="mailTo">{{signatureData.user.email.value}}</a>
                    <br>
                  </div>
                  <div id="sig-company" v-show="(signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '') || (signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== '')">
                    <a v-if="signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '' && signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.name.color }" :href="signatureData.company.website.value">{{signatureData.company.name.value}}</a>
                    <span v-else-if="signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.name.color }">{{signatureData.company.name.value}}</span>
                    <a v-else-if="signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.website.color }" :href="signatureData.company.website.value">{{signatureData.company.website.value}}</a>
                    <br v-show="(signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '') || (signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== '')">
                  </div>
                  <div id="sig-social" v-show="(signatureData.links.facebook.value !== null && signatureData.links.facebook.value !== '') || (signatureData.links.twitter.value !== null && signatureData.links.twitter.value !== '') || (signatureData.links.linkedin.value !== null && signatureData.links.linkedin.value !== '') || (signatureData.links.github.value !== null && signatureData.links.github.value !== '')">
                    <a v-for="link in signatureData.links" v-show="link.value !== undefined && link.value !== null && link.value !== ''" :href="link.value">
                      <img style="padding-top: 5px; margin-right: 2px; width: 32px;" v-if="link.site === 'Facebook'" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-32.png" alt="Facebook"><img style="padding-top: 5px; margin-right: 2px; width: 32px;" v-if="link.site === 'Twitter'" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-32.png" alt="Twitter"><img style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Linkedin'" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/linked_in_online_social_media-32.png" alt="Linkedin"><img style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Github'" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-32.png" alt="Github"></a>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <button style="margin-top: 20px;" class="green" @click="downloadHTML(signatureData.user.email.value.replace('.com', ''), 'preview', 'text/html')">Download HTML</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Required from './Required'
  export default {
    components: {
      'required': Required
    },
    name: 'signature',
    data() {
      return {
        currentTab: 'user',
        options: [
          { name: 'user', value: 'User' },
          { name: 'company', value: 'Company' },
          { name: 'image', value: 'Image' },
          { name: 'links', value: 'Social Media Links' },
          { name: 'layout', value: 'Layout'},
          { name: 'font', value: 'Fonts' },
        ],
        signature: {
          divider: {
            value: false,
            thickness: '2px',
            style: 'solid',
            color: '#000000'
          },
          image: {
            value: null,
            width: 64,
            height: 64,
            required: false
          },
          company: {
            name: {
              value: null,
              color: '#000000',
              required: false
            },
            website: {
              value: null,
              color: '#000000',
              required: false
            },
            position: {
              value: null,
              color: '#000000',
              required: false
            }
          },
          user: {
            name: {
              first: {
                value: null,
                color: '#000000',
                required: true
              },
              middle: {
                value: null,
                color: '#000000',
                required: false
              },
              last: {
                value: null,
                color: '#000000',
                required: false
              }
            },
            email: {
              value: null,
              color: '#000000',
              required: true
            },
            phone: {
              mobile: {
                value: null,
                color: '#000000',
                required: false
              },
              direct: {
                value: null,
                color: '#000000',
                required: false
              }
            }
          },
          layout: {
            selection: 'Simple',
            list: [
              { name: 'Simple', enabled: true },
              { name: 'Image', enabled: true }
            ]
          },
          font: {
            family: 'Arial',
            list: [ 'Arial', 'Tahoma', 'Georgia', 'Verdana' ]
          },
          links: {
            facebook: { required: false, site: 'Facebook', iconUrl: '../assets/img/facebook.png', value: null },
            linkedin: { required: false, site: 'Linkedin', iconUrl: '../assets/img/linkedin.png', value: null },
            twitter: { required: false, site: 'Twitter', iconUrl: '../assets/img/twitter.png', value: null },
            github: { required: false, site: 'Github', iconUrl: '../assets/img/github.png', value: null }
          }
        }
      }
    },
    computed: {
      filledOutRequired() {
        return (this.signatureData.user.name.first.value !== null
                && this.signatureData.user.name.first.value !== ''
                && this.valid('email', this.signatureData.user.email.value))
      },
      signatureData() {
        return this.signature;
      },
      mailTo() {
        return `mailto:${this.signatureData.user.email.value}`
      }
    },
    methods: {
      valid(x, y) {
        switch(x) {
          case 'email':
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return re.test(y);
          case 'image':
            return(y.match(/\.(jpeg|jpg|gif|png)$/) != null);

        }
      },
      leftTableStyle() {
        let style = {};
        style['vertical-align'] = 'middle';
        if (this.signatureData.divider.value) {
          style['border-right'] = `${this.signatureData.divider.thickness} ${this.signatureData.divider.style} ${this.signatureData.divider.color}`;
        }
        return style;
      },
      downloadHTML(filename, elId, mimeType) {
        var elHtml = document.getElementById(elId).innerHTML;
        var link = document.createElement('a');
        mimeType = mimeType || 'text/plain';

        link.setAttribute('download', filename);
        link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
        link.click();
      },
    }
  }
</script>
<style scoped>
.preview {
  background-color: #FFFFFF;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.signature {
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
}
#left {
  float: left;
  border: 1px solid #FFFFFF;
  margin-left: 2%;
  width: 45%;
  height: 100%;
}
#right {
  float: right;
  border: 1px solid #FFFFFF;
  margin-right: 2%;
  width: 45%;
  height: 100%;
}
.optionbox {
  border-top: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  margin-bottom: 15px;
}
.checkbox-custom {
  opacity: 0;
  position: absolute;
}
.checkbox-custom, .checkbox-custom-label {
  display: inline-block;
  vertical-align: middle;
  margin: 5px;
  cursor: pointer;
}
.checkbox-custom-label {
  position: relative;
}
.checkbox-custom + .checkbox-custom-label:before {
  content: '';
  background: #fff;
  border: 2px solid #ddd;
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  padding: 2px;
  margin-right: 10px;
  text-align: center;
}
.checkbox-custom:checked + .checkbox-custom-label:before {
  background: #A52B2B;
}
</style>