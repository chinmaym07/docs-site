(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{639:function(e,t,o){"use strict";o.r(t);var r=o(18),l=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"setting-up-your-development-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-development-environment"}},[e._v("#")]),e._v(" Setting up your development environment")]),e._v(" "),o("p",[e._v("Before you follow the development tutorials for creating a Zowe™ CLI plug-in, follow these steps to set up your environment.")]),e._v(" "),o("h2",{attrs:{id:"prequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prequisites"}},[e._v("#")]),e._v(" Prequisites")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/user-guide/cli-installcli.html#methods-to-install-zowe-cli"}},[e._v("Install Zowe CLI")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"initial-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#initial-setup"}},[e._v("#")]),e._v(" Initial setup")]),e._v(" "),o("p",[e._v("To create your development space, you will clone and build "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli-sample-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("zowe-cli-sample-plugin"),o("OutboundLink")],1),e._v(" from source.")]),e._v(" "),o("p",[e._v("Before you clone the repository, create a local development folder named "),o("code",[e._v("zowe-tutorial")]),e._v(". You will clone and build all projects in this folder.")]),e._v(" "),o("h2",{attrs:{id:"branches"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#branches"}},[e._v("#")]),e._v(" Branches")]),e._v(" "),o("p",[e._v("There are two branches in the repository that correspond to different Zowe CLI versions. You can develop two branches of your plug-in so that users can install your plug-in into "),o("code",[e._v("@latest")]),e._v(" or "),o("code",[e._v("@zowe-v1-lts")]),e._v(" CLI. Developing for both versions will let you take advantage of new core features quickly and expose your plug-in to a wider range of users.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("master")]),e._v(" branch of Sample Plug-in is compatible with the "),o("code",[e._v("@zowe-v1-lts")]),e._v(" version of core CLI (Zowe LTS release).")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("master")]),e._v(" branch of Sample Plug-in is also compatible with the "),o("code",[e._v("@latest")]),e._v(" version of core CLI (Zowe Active Development release) at this time.")]),e._v(" "),o("p",[e._v("For more information about the versioning scheme, see "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli/blob/master/docs/MaintainerVersioning.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maintaner Versioning"),o("OutboundLink")],1),e._v(" in the Zowe CLI repository.")]),e._v(" "),o("h3",{attrs:{id:"clone-zowe-cli-sample-plugin-and-build-from-source"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clone-zowe-cli-sample-plugin-and-build-from-source"}},[e._v("#")]),e._v(" Clone zowe-cli-sample-plugin and build from source")]),e._v(" "),o("p",[e._v("Clone the repository into your development folder to match the following structure:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe-tutorial\n└── zowe-cli-sample-plugin\n")])])]),o("p",[e._v("Follow these steps:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("cd")]),e._v(" to your "),o("code",[e._v("zowe-tutorial")]),e._v(" folder.")]),e._v(" "),o("li",[o("code",[e._v("git clone https://github.com/zowe/zowe-cli-sample-plugin")])]),e._v(" "),o("li",[o("code",[e._v("cd")]),e._v(" to your "),o("code",[e._v("zowe-cli-sample-plugin")]),e._v(" folder.")]),e._v(" "),o("li",[o("code",[e._v("git checkout master")])]),e._v(" "),o("li",[o("code",[e._v("npm install")])]),e._v(" "),o("li",[o("code",[e._v("npm run build")])])]),e._v(" "),o("h3",{attrs:{id:"optional-run-the-automated-tests"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optional-run-the-automated-tests"}},[e._v("#")]),e._v(" (Optional) Run the automated tests")]),e._v(" "),o("p",[e._v("We recommend running automated tests on all code changes. Follow these steps:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("cd")]),e._v(" to the "),o("code",[e._v("__tests__/__resources__/properties")]),e._v(" folder.")]),e._v(" "),o("li",[e._v("Copy "),o("code",[e._v("example_properties.yaml")]),e._v(" to "),o("code",[e._v("custom_properties.yaml")]),e._v(".")]),e._v(" "),o("li",[e._v("Edit the properties within "),o("code",[e._v("custom_properties.yaml")]),e._v(" to contain valid system information for your site.")]),e._v(" "),o("li",[o("code",[e._v("cd")]),e._v(" to your "),o("code",[e._v("zowe-cli-sample-plugin")]),e._v(" folder")]),e._v(" "),o("li",[o("code",[e._v("npm run test")])])]),e._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),o("p",[e._v("After you complete your setup, follow the "),o("RouterLink",{attrs:{to:"/extend/extend-cli/cli-installing-sample-plugin.html"}},[e._v("Installing the sample plug-in")]),e._v(" tutorial to install this sample plug-in to Zowe CLI.")],1)])}),[],!1,null,null,null);t.default=l.exports}}]);