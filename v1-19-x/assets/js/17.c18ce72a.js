(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{462:function(e,o,t){e.exports=t.p+"assets/img/ZE-newProfiles.860d641e.gif"},463:function(e,o,t){e.exports=t.p+"assets/img/ZE-edit-ze-profile.1c2893f3.gif"},464:function(e,o,t){e.exports=t.p+"assets/img/ZE-profile-links.aefcf22e.gif"},680:function(e,o,t){"use strict";t.r(o);var r=t(18),i=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"zowe-explorer-profiles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zowe-explorer-profiles"}},[e._v("#")]),e._v(" Zowe Explorer Profiles")]),e._v(" "),r("p",[e._v("After you install Zowe Explorer, you need to have a Zowe Explorer profile to use all functions of the extension. You can optionally activate the Secure Credential Store plug-in to securely store your credentials.")]),e._v(" "),r("h2",{attrs:{id:"working-with-zowe-explorer-profiles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#working-with-zowe-explorer-profiles"}},[e._v("#")]),e._v(" Working with Zowe Explorer profiles")]),e._v(" "),r("p",[e._v("You must have a "),r("code",[e._v("zosmf")]),e._v(" compatible profile before you can use Zowe Explorer. You can set up a profile to retain your credentials, host, and port name. In addition, you can create multiple profiles and use them simultaneously.")]),e._v(" "),r("p",[r("strong",[e._v("Follow these steps:")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Navigate to the explorer tree.")])]),e._v(" "),r("li",[r("p",[e._v("Click the "),r("strong",[e._v("+")]),e._v(" button next to the "),r("strong",[e._v("DATA SETS")]),e._v(", "),r("strong",[e._v("USS")]),e._v(" or "),r("strong",[e._v("JOBS")]),e._v(" bar.")]),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" If you already have a profile, select it from the drop-down menu.")])]),e._v(" "),r("li",[r("p",[e._v("Select the "),r("strong",[e._v("Create a New Connection to z/OS")]),e._v(" option.")]),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" When you create a new profile, user name and password fields are optional. However, the system will prompt you to specify your credentials when you use the new profile for the first time.")])]),e._v(" "),r("li",[r("p",[e._v("Follow the instructions, and enter all required information to complete the profile creation.")])])]),e._v(" "),r("img",{attrs:{src:t(462),width:"600",alt:"New Connection"}}),e._v(" "),r("p",[e._v("You successfully created a Zowe CLI "),r("code",[e._v("zosmf")]),e._v(" profile. Now you can use all the functionalities of the extension.")]),e._v(" "),r("p",[e._v("If you need to edit a profile, click the "),r("strong",[e._v("Update Profile")]),e._v(" button next to the corresponding profile.")]),e._v(" "),r("img",{attrs:{src:t(463),width:"600",height:"300",alt:"Edit a Profile"}}),e._v(" "),r("p",[e._v("In addition, you can hide a profile from the explorer tree, and permanently delete a profile. When you delete your profile permanently, the extension erases the profile from the "),r("code",[e._v(".zowe")]),e._v(" folder. To hide or delete a profile, right-click the profile and choose one of the respective options from the list.")]),e._v(" "),r("h3",{attrs:{id:"associate-profile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#associate-profile"}},[e._v("#")]),e._v(" Associate Profile")]),e._v(" "),r("p",[e._v('Extensions built on Zowe Explorer provide users with additional functionality through unique profile types, such as RSE or FTP. The "associate profiles" function allows users to link, or associate, these extension profile types with an existing zOSMF profile. Every Zowe Explorer profile has two types of association: primary and secondary. While the primary association is '),r("code",[e._v("zosmf")]),e._v(", the secondary association includes Zowe CLI plug-ins or other services you might have. Within the scope of their own extender package, associated profiles can be used to access a relevant REST API that is available to the extender.")]),e._v(" "),r("p",[e._v("Create a secondary association for your Zowe Explorer profiles.")]),e._v(" "),r("p",[r("strong",[e._v("Follow these steps:")])]),e._v(" "),r("ol",[r("li",[e._v("Navigate to the explorer tree.")]),e._v(" "),r("li",[e._v("Click the associate profiles button.")]),e._v(" "),r("li",[e._v("Select a secondary profile type.")]),e._v(" "),r("li",[e._v("Select a file name you want to create an association for.")])]),e._v(" "),r("img",{attrs:{src:t(464),width:"600",height:"300",alt:"Edit a Profile"}}),e._v(" "),r("p",[e._v("You have successfully created the secondary association for your Zowe Explorer profile.")]),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://github.com/zowe/vscode-extension-for-zowe/blob/master/docs/README-Extending.md#associating-zowe-cli-profiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Associating Zowe CLI Profiles"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"enabling-secure-credential-store-with-zowe-explorer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enabling-secure-credential-store-with-zowe-explorer"}},[e._v("#")]),e._v(" Enabling Secure Credential Store with Zowe Explorer")]),e._v(" "),r("p",[e._v("Store your credentials securely by using the Secure Credential Store (SCS) plug-in in Zowe Explorer. By default, your credentials are stored in plain text.")]),e._v(" "),r("p",[e._v("Activate the SCS plug-in in Zowe Explorer.")]),e._v(" "),r("p",[r("strong",[e._v("Follow these steps:")])]),e._v(" "),r("ol",[r("li",[e._v("Open Zowe Explorer.")]),e._v(" "),r("li",[e._v("Navigate to the VSCode settings.")]),e._v(" "),r("li",[e._v("Open Zowe Explorer Settings.")]),e._v(" "),r("li",[e._v("Add the "),r("strong",[e._v("Zowe-Plugin")]),e._v(" value to the "),r("code",[e._v("Zowe Security: Credential Key")]),e._v(" entry field.")]),e._v(" "),r("li",[e._v("Restart VSCode.")]),e._v(" "),r("li",[e._v("Create a profile.")])]),e._v(" "),r("p",[e._v("Your Zowe Explorer credentials are now stored securely.")]),e._v(" "),r("h3",{attrs:{id:"for-zowe-cli-users"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-zowe-cli-users"}},[e._v("#")]),e._v(" For Zowe CLI users")]),e._v(" "),r("p",[e._v("Ensure that you install the SCS plug-in for Zowe CLI before activating SCS in Zowe Explorer. For more information about the SCS plug-in for Zowe CLI, see "),r("RouterLink",{attrs:{to:"/user-guide/cli-scsplugin.html"}},[e._v("Secure Credential Store plug-in for Zowe Explorer")]),e._v(".")],1),e._v(" "),r("p",[r("strong",[e._v("Important:")]),e._v(" If you did not install the SCS plug-in for Zowe CLI and try to activate SCS in the extension, you will not be able to use your existing profiles, and will have to recreate them.")]),e._v(" "),r("p",[e._v("Activate the SCS plug-in in Zowe Explorer.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Open Zowe CLI and issue the following command:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("zowe scs u\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Open Zowe Explorer.")])]),e._v(" "),r("li",[r("p",[e._v("Navigate to the VSCode settings.")])]),e._v(" "),r("li",[r("p",[e._v("Open Zowe Explorer Settings.")])]),e._v(" "),r("li",[r("p",[e._v("Add the "),r("strong",[e._v("Zowe-Plugin")]),e._v(" value to the "),r("code",[e._v("Zowe Security: Credential Key")]),e._v(" entry field.")])]),e._v(" "),r("li",[r("p",[e._v("Restart VSCode.")])])]),e._v(" "),r("p",[e._v("The credentials of your newly created or existing profiles are now stored securely.")]),e._v(" "),r("h2",{attrs:{id:"use-base-profile-and-token-with-existing-profiles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-base-profile-and-token-with-existing-profiles"}},[e._v("#")]),e._v(" Use Base Profile and Token with Existing Profiles")]),e._v(" "),r("p",[e._v("As a Zowe user, you can leverage the base profile functionality to access multiple services through Single Sign-on. Base profiles enable you to authenticate via Zowe API Mediation Layer. You can use base profiles with more than one service profile. For more information, see "),r("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html#base-profiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Base Profiles"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Before you log in and connect your service profile, ensure that you have "),r("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-installcli.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe CLI"),r("OutboundLink")],1),e._v(" v6.16 or higher installed.")]),e._v(" "),r("h3",{attrs:{id:"access-services-through-api-ml-with-sso"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#access-services-through-api-ml-with-sso"}},[e._v("#")]),e._v(" Access services through API ML with SSO")]),e._v(" "),r("p",[e._v("Connect your service profile with a base profile and token.")]),e._v(" "),r("p",[r("strong",[e._v("Follow these steps:")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Open Zowe CLI and run the following command: "),r("code",[e._v("zowe auth login apiml")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Follow the instructions to complete the login process.")]),e._v(" "),r("p",[e._v("A local base profile is created that contains your token. For more information about the process, see "),r("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html#how-token-management-works",target:"_blank",rel:"noopener noreferrer"}},[e._v("Token Management"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Run Zowe Explorer and click the "),r("strong",[e._v("+")]),e._v(" icon.")])]),e._v(" "),r("li",[r("p",[e._v("Select the profile you use with your base profile with the token.")]),e._v(" "),r("p",[e._v("The profile appears in the tree and you can now use this profile to access z/OSMF via the API Mediation Layer.")])])]),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html#integrating-with-api-mediation-layer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Integrating with API Mediation Layer"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"log-in-to-the-authentication-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-the-authentication-service"}},[e._v("#")]),e._v(" Log in to the Authentication Service")]),e._v(" "),r("p",[e._v("If the token for your base profile is no longer valid, you can log in again to get a new token with the "),r("strong",[e._v("Log in to Authentication Service")]),e._v(" feature.")]),e._v(" "),r("p",[r("strong",[e._v("Notes:")])]),e._v(" "),r("ul",[r("li",[e._v("The feature is only available for base profiles.")]),e._v(" "),r("li",[e._v("The feature supports only API Mediation Layer at the moment. Other extenders may use a different authentication service.")])]),e._v(" "),r("p",[r("strong",[e._v("Follow these steps:")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Open Zowe Explorer.")])]),e._v(" "),r("li",[r("p",[e._v("Right-click your profile.")])]),e._v(" "),r("li",[r("p",[e._v("Select the "),r("strong",[e._v("Log in to Authentication Service")]),e._v(" option.")]),e._v(" "),r("p",[e._v("You will be prompted to enter your username and password beforehand.")])])]),e._v(" "),r("p",[e._v("The token is stored in the default base profile .yaml file.")]),e._v(" "),r("p",[e._v("If you do not want to store your token, request from the server to end the session of your token. Use the "),r("strong",[e._v("Log out from Authentication Service")]),e._v(" feature to invalidate the token.")]),e._v(" "),r("p",[r("strong",[e._v("Follow these steps:")])]),e._v(" "),r("ol",[r("li",[e._v("Open Zowe Explorer.")]),e._v(" "),r("li",[e._v("Right-click your profile.")]),e._v(" "),r("li",[e._v("Select the "),r("strong",[e._v("Log out from Authentication Service")]),e._v(" option.")])]),e._v(" "),r("p",[e._v("Your token has been successfully invalidated.")])])}),[],!1,null,null,null);o.default=i.exports}}]);