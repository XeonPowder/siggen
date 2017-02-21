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
      <span v-if="!filledOutRequired"><h3 style="color: #FFFFFF;">Please fill out required fields. <span style="font-size: 32px; color: black;">( * )</span></h3></span>
      <div id="preview" class="preview" style="text-align: left !important;" v-else>
        <div v-if="signatureData.layout.selection === 'Simple'" :style="{'font-family': signatureData.font.family }">
          <div id="sig-name">
            <span :style="{ 'font-size': '12px', 'color': signatureData.user.name.first.color, 'font-weight': 'bold' }" id="sig-name-first">{{signatureData.user.name.first.value}}</span>
            <span style="font-size: 12px;" v-show="signatureData.user.name.middle.value !== undefined && signatureData.user.name.middle.value !== null && signatureData.user.name.middle.value !== ''"><span :style="{ 'color': signatureData.user.name.middle.color, 'font-weight': 'bold' }" id="sig-name.middle">{{signatureData.user.name.middle.value}}</span></span>
            <span style="font-size: 12px;" v-show="signatureData.user.name.last.value !== undefined && signatureData.user.name.last.value !== null && signatureData.user.name.last.value !== ''"><span :style="{ 'color': signatureData.user.name.last.color, 'font-weight': 'bold' }" id="sig-name-last">{{signatureData.user.name.last.value}}</span></span>
            <span style="font-size: 12px;" v-show="signatureData.company.position.value !== undefined && signatureData.company.position.value !== null && signatureData.company.position.value !== ''">| <span :style="{ 'color': signatureData.company.position.color, 'font-weight': 'bold' }">{{signatureData.company.position.value}}</span></span>
            <br>
          </div>
          <div id="sig-phone">
            <span style="font-size: 10px;" v-show="signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== ''">M: <span :style="{ 'color': signatureData.user.phone.mobile.color }">{{signatureData.user.phone.mobile.value}}</span></span>
            <span style="font-size: 10px;" v-show="signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== '' && signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''">| </span>
            <span style="font-size: 10px;" v-show="signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''">D: <span :style="{ 'color': signatureData.user.phone.direct.color }">{{signatureData.user.phone.direct.value}}</span></span>
          </div>
          <div id="sig-email">
            <a v-show="signatureData.user.email.value !== undefined && signatureData.user.email.value !== null && signatureData.user.email.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.user.email.color }" :href="mailTo">{{signatureData.user.email.value}}</a>
            <br>
          </div>
          <div id="sig-company">
            <a v-if="signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '' && signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.name.color }" :href="signatureData.company.website.value">{{signatureData.company.name.value}}</a>
            <span v-else-if="signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.name.color }">{{signatureData.company.name.value}}</span>
            <a v-else-if="signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.website.color }" :href="signatureData.company.website.value">{{signatureData.company.website.value}}</a>
            <br v-show="(signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '') || (signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== '')">
          </div>
          <div id="sig-social">
            <a v-for="link in signatureData.links" v-show="link.value !== undefined && link.value !== null && link.value !== ''" :href="link.value">
              <svg style="padding-top: 5px; margin-right: 2px; width: 32px;" v-if="link.site === 'Facebook'" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Flat_copy"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#333333"/></g><path d="M13.69,24.903h3.679v-8.904h2.454l0.325-3.068h-2.779l0.004-1.536c0-0.8,0.076-1.229,1.224-1.229h1.534   V7.097h-2.455c-2.949,0-3.986,1.489-3.986,3.992v1.842h-1.838v3.069h1.838V24.903z" fill="#FFFFFF"/></g></svg>
              <svg style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Twitter'" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Flat_copy"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#333333"/></g><path d="M18.226,8.886c-1.59,0.579-2.595,2.071-2.481,3.704l0.038,0.63l-0.636-0.077   c-2.315-0.296-4.338-1.299-6.056-2.984l-0.84-0.836L8.036,9.94c-0.458,1.376-0.165,2.83,0.789,3.808   c0.509,0.54,0.394,0.617-0.483,0.296c-0.305-0.103-0.573-0.18-0.598-0.141c-0.089,0.09,0.216,1.26,0.458,1.724   c0.331,0.644,1.005,1.273,1.743,1.647l0.624,0.296L9.83,17.581c-0.712,0-0.738,0.013-0.661,0.284   c0.254,0.836,1.259,1.724,2.379,2.11l0.789,0.27l-0.687,0.412c-1.018,0.593-2.214,0.927-3.41,0.951   c-0.573,0.013-1.044,0.064-1.044,0.103c0,0.128,1.553,0.848,2.455,1.132c2.71,0.836,5.929,0.475,8.346-0.952   c1.718-1.016,3.435-3.036,4.237-4.992c0.433-1.041,0.865-2.945,0.865-3.858c0-0.592,0.038-0.669,0.75-1.376   c0.42-0.412,0.814-0.862,0.891-0.99c0.128-0.245,0.114-0.245-0.534-0.026c-1.081,0.386-1.234,0.335-0.699-0.244   c0.394-0.412,0.865-1.158,0.865-1.376c0-0.038-0.191,0.026-0.407,0.141c-0.229,0.129-0.738,0.322-1.12,0.437l-0.687,0.219   L21.535,9.4c-0.344-0.231-0.826-0.489-1.081-0.566C19.804,8.654,18.812,8.68,18.226,8.886z" fill="#FFFFFF"/></g></svg>
              <svg style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Github'" enable-background="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_3"><g><g><path d="M32,0C14.327,0,0,14.327,0,32c0,17.673,14.327,32,32,32s32-14.327,32-32C64,14.327,49.673,0,32,0z" fill="#333333"/></g></g><g id="Outline_Filled"><path d="M38.592,50.166h-4.84h-4.844c0,0,0.014-2.874,0-4.844c-6.629,1.428-8.479-3.633-8.479-3.633    c-1.21-2.423-2.423-3.633-2.423-3.633c-2.423-1.438,0-1.21,0-1.21c2.423,0,3.633,2.423,3.633,2.423    c2.126,3.609,5.908,3.028,7.266,2.423c0-1.21,0.53-3.042,1.21-3.633c-5.29-0.595-9.693-3.633-9.693-9.689s1.216-7.266,2.427-8.479    c-0.244-0.597-1.259-2.805,0.037-6.056c0,0,2.38,0,4.803,3.633c1.2-1.2,4.844-1.21,6.056-1.21c1.208,0,4.854,0.01,6.054,1.21    c2.423-3.633,4.809-3.633,4.809-3.633c1.296,3.251,0.282,5.459,0.037,6.056c1.21,1.21,2.423,2.423,2.423,8.479    s-4.397,9.092-9.689,9.689c0.682,0.591,1.21,2.675,1.21,3.633L38.592,50.166L38.592,50.166z" fill="#FFFFFF" id="Cat_3_"/></g></g></svg>
              <svg style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Linkedin'" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Flat_copy"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#333333"/></g><path d="M24.294,22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818c-1.889,0-2.735,1.039-3.206,1.768v-1.517h-3.558   c0.047,1.005,0,10.704,0,10.704h3.558v-5.978c0-0.319,0.023-0.639,0.117-0.867c0.257-0.639,0.842-1.301,1.825-1.301   c1.288,0,1.803,0.981,1.803,2.42v5.727L24.294,22.942L24.294,22.942z M9.685,10.777c1.24,0,2.013-0.823,2.013-1.85   c-0.023-1.05-0.773-1.849-1.99-1.849S7.696,7.877,7.696,8.927c0,1.028,0.772,1.85,1.967,1.85H9.685z M11.464,22.942V12.238H7.907   v10.704H11.464z" fill="#FFFFFF"/></g></svg></a>
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
              <div id="sig-phone">
                <span style="font-size: 10px;" v-show="signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== ''">M: <span :style="{ 'color': signatureData.user.phone.mobile.color }">{{signatureData.user.phone.mobile.value}}</span></span>
                <span style="font-size: 10px;" v-show="signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== '' && signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''">| </span>
                <span style="font-size: 10px;" v-show="signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''">D: <span :style="{ 'color': signatureData.user.phone.direct.color }">{{signatureData.user.phone.direct.value}}</span></span>
              </div>
              <div>
                <a id="sig-email" v-show="signatureData.user.email.value !== undefined && signatureData.user.email.value !== null && signatureData.user.email.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.user.email.color }" :href="mailTo">{{signatureData.user.email.value}}</a>
                <br>
              </div>
              <div id="sig-company">
                <a v-if="signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '' && signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.name.color }" :href="signatureData.company.website.value">{{signatureData.company.name.value}}</a>
                <span v-else-if="signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.name.color }">{{signatureData.company.name.value}}</span>
                <a v-else-if="signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== ''" :style="{ 'font-size': '10px', 'color': signatureData.company.website.color }" :href="signatureData.company.website.value">{{signatureData.company.website.value}}</a>
                <br v-show="(signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '') || (signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== '')">
              </div>
              <div id="sig-social">
                <a v-for="link in signatureData.links" v-show="link.value !== undefined && link.value !== null && link.value !== ''" :href="link.value">
                  <svg style="padding-top: 5px; margin-right: 2px; width: 32px;" v-if="link.site === 'Facebook'" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Flat_copy"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#333333"/></g><path d="M13.69,24.903h3.679v-8.904h2.454l0.325-3.068h-2.779l0.004-1.536c0-0.8,0.076-1.229,1.224-1.229h1.534   V7.097h-2.455c-2.949,0-3.986,1.489-3.986,3.992v1.842h-1.838v3.069h1.838V24.903z" fill="#FFFFFF"/></g></svg>
                  <svg style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Twitter'" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Flat_copy"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#333333"/></g><path d="M18.226,8.886c-1.59,0.579-2.595,2.071-2.481,3.704l0.038,0.63l-0.636-0.077   c-2.315-0.296-4.338-1.299-6.056-2.984l-0.84-0.836L8.036,9.94c-0.458,1.376-0.165,2.83,0.789,3.808   c0.509,0.54,0.394,0.617-0.483,0.296c-0.305-0.103-0.573-0.18-0.598-0.141c-0.089,0.09,0.216,1.26,0.458,1.724   c0.331,0.644,1.005,1.273,1.743,1.647l0.624,0.296L9.83,17.581c-0.712,0-0.738,0.013-0.661,0.284   c0.254,0.836,1.259,1.724,2.379,2.11l0.789,0.27l-0.687,0.412c-1.018,0.593-2.214,0.927-3.41,0.951   c-0.573,0.013-1.044,0.064-1.044,0.103c0,0.128,1.553,0.848,2.455,1.132c2.71,0.836,5.929,0.475,8.346-0.952   c1.718-1.016,3.435-3.036,4.237-4.992c0.433-1.041,0.865-2.945,0.865-3.858c0-0.592,0.038-0.669,0.75-1.376   c0.42-0.412,0.814-0.862,0.891-0.99c0.128-0.245,0.114-0.245-0.534-0.026c-1.081,0.386-1.234,0.335-0.699-0.244   c0.394-0.412,0.865-1.158,0.865-1.376c0-0.038-0.191,0.026-0.407,0.141c-0.229,0.129-0.738,0.322-1.12,0.437l-0.687,0.219   L21.535,9.4c-0.344-0.231-0.826-0.489-1.081-0.566C19.804,8.654,18.812,8.68,18.226,8.886z" fill="#FFFFFF"/></g></svg>
                  <svg style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Github'" enable-background="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_3"><g><g><path d="M32,0C14.327,0,0,14.327,0,32c0,17.673,14.327,32,32,32s32-14.327,32-32C64,14.327,49.673,0,32,0z" fill="#333333"/></g></g><g id="Outline_Filled"><path d="M38.592,50.166h-4.84h-4.844c0,0,0.014-2.874,0-4.844c-6.629,1.428-8.479-3.633-8.479-3.633    c-1.21-2.423-2.423-3.633-2.423-3.633c-2.423-1.438,0-1.21,0-1.21c2.423,0,3.633,2.423,3.633,2.423    c2.126,3.609,5.908,3.028,7.266,2.423c0-1.21,0.53-3.042,1.21-3.633c-5.29-0.595-9.693-3.633-9.693-9.689s1.216-7.266,2.427-8.479    c-0.244-0.597-1.259-2.805,0.037-6.056c0,0,2.38,0,4.803,3.633c1.2-1.2,4.844-1.21,6.056-1.21c1.208,0,4.854,0.01,6.054,1.21    c2.423-3.633,4.809-3.633,4.809-3.633c1.296,3.251,0.282,5.459,0.037,6.056c1.21,1.21,2.423,2.423,2.423,8.479    s-4.397,9.092-9.689,9.689c0.682,0.591,1.21,2.675,1.21,3.633L38.592,50.166L38.592,50.166z" fill="#FFFFFF" id="Cat_3_"/></g></g></svg>
                  <svg style="padding-top: 5px; margin-right: 2px; width: 32px;" v-else-if="link.site === 'Linkedin'" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Flat_copy"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#333333"/></g><path d="M24.294,22.942v-6.137c0-3.288-1.755-4.818-4.096-4.818c-1.889,0-2.735,1.039-3.206,1.768v-1.517h-3.558   c0.047,1.005,0,10.704,0,10.704h3.558v-5.978c0-0.319,0.023-0.639,0.117-0.867c0.257-0.639,0.842-1.301,1.825-1.301   c1.288,0,1.803,0.981,1.803,2.42v5.727L24.294,22.942L24.294,22.942z M9.685,10.777c1.24,0,2.013-0.823,2.013-1.85   c-0.023-1.05-0.773-1.849-1.99-1.849S7.696,7.877,7.696,8.927c0,1.028,0.772,1.85,1.967,1.85H9.685z M11.464,22.942V12.238H7.907   v10.704H11.464z" fill="#FFFFFF"/></g></svg></a>
              </div>
            </td>
          </tr>
        </table>
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
      }
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