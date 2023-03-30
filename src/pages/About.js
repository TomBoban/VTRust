import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <span class="title">VTRUSTS (CIN:U85300KL2021NPL069759)</span>
                  <h2 style={{ fontSize: "15px" }}>
                    ഇത് വിശ്വകര്‍മ്മ സമുദായത്തിനുവേണ്ടി സ്കൂളുകളും കോളേജുകളും
                    ആതുരാലയങ്ങളും നിര്‍മ്മിക്കുവാന്‍ കഷ്ടപ്പെടുന്ന ഒരുകൂട്ടം
                    ജനങ്ങളുടെ ശ്രമമാണ്
                  </h2>
                </div>
                {/* <div class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div> */}
                <ul class="list-style-one">
                  <li>
                    വിവേചനങ്ങളില്ലാതെ വിശ്വകര്‍മ്മ സമൂഹത്തിന്‍റെ
                    വളര്‍ച്ചയ്ക്കാവശ്യമായ സേവനങ്ങള്‍ ചെയ്യുക എന്നതാണ് പ്രമുഖ
                    ലക്ഷ്യം. കക്ഷി-രാഷ്ട്രീയത്തിന് സ്ഥാനമില്ലാതെ വിശ്വകര്‍മ്മ
                    സമുദായത്തിനു വേണ്ടി മാത്രം പ്രവര്‍ത്തിക്കുക
                  </li>
                  <li>
                    സഹകരണ സംഘം മാതൃക കൈക്കൊ ് സാമ്പത്തിക അടിത്തറയുണ്ടാക്കി
                    സമുദായത്തിനെ ഉന്നതിയില്‍ കൊണ്ടുവരിക
                  </li>
                  <li>
                    സാഹോദര്യവും സൗഹാര്‍ദ്ദവും ത്യാഗശീലവും സേവനസന്നദ്ധതയും
                    അംഗങ്ങളില്‍ വളര്‍ത്തി പരസ്പരം സുഖദുഃഖങ്ങളില്‍
                    സര്‍വ്വാത്മനാപങ്കു കൊള്ളുക.
                  </li>
                  <li>
                    സാന്മാര്‍ഗ്ഗികവും സാംസ്കാരികവും മതപരവുമായ കാര്യങ്ങളില്‍
                    താല്‍പര്യം വര്‍ദ്ധിപ്പിക്കുക.
                  </li>
                  <li>
                    സംഗീതം, സാഹിത്യം തുടങ്ങിയ വിവിധ കലകള്‍ പരിപോഷിപ്പിക്കുക. ഈ
                    ഉദ്ദേശസാദ്ധ്യതയ്ക്കുതകുന്ന സ്ഥാപനങ്ങള്‍ രൂപീകരിച്ചു നടത്തുക.
                  </li>
                  <li>
                    സംഗീതം, സാഹിത്യം തുടങ്ങിയ വിവിധ കലകള്‍ പരിപോഷിപ്പിക്കുക. ഈ
                    ഉദ്ദേശസാദ്ധ്യതയ്ക്കുതകുന്ന സ്ഥാപനങ്ങള്‍ രൂപീകരിച്ചു നടത്തുക.
                  </li>
                  <li>
                    അംഗങ്ങളുടെ സാമ്പത്തിക സ്ഥിതി വര്‍ദ്ധിപ്പിക്കുന്നതിനു വേണ്ടി
                    വ്യവസായം, കൈത്തൊഴിലുകള്‍ എന്നിവ സംഘടിപ്പിക്കുക.
                  </li>
                  <li>
                    കായികവും മാനസികവുമായ വിനോദങ്ങള്‍ മുഖേന അംഗങ്ങള്‍
                    ഒത്തുചേര്‍ന്നു ഉല്ലാസകരവും പ്രയോജനപ്രദവും ആയ ജീവിതം
                    നയിക്കുന്നതിനുതകുന്ന സാഹചര്യം സംവിധാനം ചെയ്യുക.
                  </li>
                  <li>
                    അംഗങ്ങള്‍ക്ക് പ്രയോജനപ്രദമായ ഇന്‍ഷുറന്‍സ് പരിരക്ഷ നല്‍കുക.
                  </li>
                  <li>
                    അംഗങ്ങള്‍ക്ക് പെന്‍ഷന്‍ നല്‍കുന്നതിനുള്ള സംവിധാനം ട്രസ്റ്റ്
                    വഴി നടപ്പാക്കുക.
                  </li>
                  <li>
                    എല്ലാ അംഗങ്ങള്‍ക്കും ട്രസ്റ്റിന്‍റെ നിയമത്തിനു വിധേയമായി
                    വായ്പ്പായിനത്തില്‍ സഹായം നല്‍കുക
                  </li>
                </ul>
                {/* <div class="btn-box">
                  <a href="#" class="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div> */}
              </div>
            </div>

            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft">
                <figure class="image-1">
                  <img src="/Images/aboutimage.png" alt="" />
                </figure>
                <figure class="image-2">
                  <img src="/Images/vtrustimage2.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
