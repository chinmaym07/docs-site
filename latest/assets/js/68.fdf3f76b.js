(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{234:function(e,t,s){"use strict";s.r(t);var a=s(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("The Zowe CLI Plug-in for IBM® CICS® lets you extend Zowe CLI to interact with CICS programs and transactions. The plug-in uses the IBM CICS® Management Client Interface (CMCI) API to achieve the interaction with CICS. For more information, see "),s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.3.0/com.ibm.cics.ts.clientapi.doc/topics/clientapi_overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CICS management client interface"),s("OutboundLink")],1),e._v(" on the IBM Knowledge Center.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("As an application developer, you can use Zowe CLI Plug-in for IBM CICS to perform the following tasks:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Before you install the plug-in, meet the software requirements in "),s("router-link",{attrs:{to:"./cli-swreqplugins.html"}},[e._v("Software requirements for Zowe CLI plug-ins")]),e._v(".")],1),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("Use one of the following methods to install the Zowe CLI Plug-in for IBM CICS:")]),e._v(" "),e._m(6),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" For more information about how to install multiple plug-ins, update to a specific version of a plug-ins, and install from specific registries, see "),s("router-link",{attrs:{to:"./cli-installplugins.html"}},[e._v("Install Plug-ins")]),e._v(".")],1),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("To install Zowe CLI from an online registry, complete the following steps:")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("ol",[s("li",[s("p",[e._v("Open a command line window and change the local directory where you extracted the "),s("code",[e._v("zowe-cli-bundle.zip")]),e._v(" file. If you do not have the "),s("code",[e._v("zowe-cli-bundle.zip")]),e._v(" file, see the topic "),s("router-link",{attrs:{to:"./cli-installcli.html#installing-zowe-cli-from-a-local-package"}},[e._v("Install Zowe CLI from local package")]),e._v(" for information about how to obtain and extract it.")],1)]),e._v(" "),e._m(11),e._v(" "),e._m(12)]),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("You can set up a CICS profile to avoid typing your connection details on every command. The profile contains your host, port, username, and password for the CMCI instance of your choice. You can create multiple profiles and switch between them if necessary. Issue the following command to create a cics profile:")]),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),e._v(" "),s("p",[e._v("The Zowe CLI Plug-in for IBM CICS adds the following commands to Zowe CLI:")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("The define command lets you define programs and transactions to CICS so that you can deploy and test the changes to your CICS application. To display a list of possible objects and options, issue the following command:")]),e._v(" "),e._m(19),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._m(23),e._v(" "),s("p",[e._v("The delete command lets you delete previously defined CICS programs or transactions to help you deploy and test the changes to your CICS application. To display a list of possible objects and options, issue the following command:")]),e._v(" "),e._m(24),e._m(25),e._v(" "),s("p",[e._v("Delete a program named PGM123 from the CICS region named MYREGION:")]),e._v(" "),e._m(26),e._m(27),e._v(" "),s("p",[e._v("The discard command lets you remove existing CICS program or transaction definitions to help you deploy and test the changes to your CICS application. To display a list of possible objects and options, issue the following command:")]),e._v(" "),e._m(28),e._m(29),e._v(" "),s("p",[e._v("Discard a program named PGM123 from the CICS region named MYREGION:")]),e._v(" "),e._m(30),e._m(31),e._v(" "),s("p",[e._v("The get command lets you get a list of programs and transactions that are installed in your CICS region so that you can determine if they were installed successfully and defined properly. To display a list of objects and options, issue the following command:")]),e._v(" "),e._m(32),e._m(33),e._v(" "),s("p",[e._v("Return a list of program resources from a CICS region named MYREGION:")]),e._v(" "),e._m(34),e._m(35),e._v(" "),s("p",[e._v("The install command lets you install resources, such as programs and transactions, to a CICS region so that you can deploy and test the changes to your CICS application. To display a list of possible objects and options, issue the following command:")]),e._v(" "),e._m(36),e._m(37),e._v(" "),s("p",[e._v("Install a transaction named TRN1 to the region named MYREGION in the CSD group named MYGRP:")]),e._v(" "),e._m(38),e._m(39),e._v(" "),s("p",[e._v("The refresh command lets you refresh changes to a CICS program so that you can deploy and test the changes to your CICS application. To display a list of objects and options, issue the following command:")]),e._v(" "),e._m(40),e._m(41),e._v(" "),s("p",[e._v("Refresh a program named PGM123 from the region named MYREGION:")]),e._v(" "),e._m(42)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"zowe-cli-plug-in-for-ibm-cics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zowe-cli-plug-in-for-ibm-cics","aria-hidden":"true"}},[this._v("#")]),this._v(" Zowe CLI Plug-in for IBM CICS")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"#use-cases"}},[e._v("Use Cases")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#software-requirements"}},[e._v("Software requirements")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#installing"}},[e._v("Installing")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#creating-a-user-profile"}},[e._v("Creating a user profile")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#commands"}},[e._v("Commands")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"use-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cases","aria-hidden":"true"}},[this._v("#")]),this._v(" Use cases")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Deploy code changes to CICS applications that were developed with COBOL.")]),e._v(" "),s("li",[e._v("Deploy changes to CICS regions for testing or delivery. See the "),s("a",{attrs:{href:"#defining-resources-to-cics"}},[e._v("define command")]),e._v(" for an example of how you can define programs to CICS to assist with testing and delivery.")]),e._v(" "),s("li",[e._v("Automate CICS interaction steps in your CI/CD pipeline with Jenkins Automation Server or TravisCI.")]),e._v(" "),s("li",[e._v("Deploy build artifacts to CICS regions.")]),e._v(" "),s("li",[e._v("Alter, copy, define, delete, discard, and install CICS resources and resource definitions.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"software-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Software requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[t("a",{attrs:{href:"#installing-from-an-online-registry"}},[this._v("Installing from an online registry")])])]),this._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#installing-from-a-local-package"}},[this._v("Installing from a local package")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"installing-from-an-online-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-from-an-online-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing from an online registry")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[s("p",[e._v("Set your npm registry if you did not already do so when you installed Zowe CLI. Issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm config set @brightside:registry https://api.bintray.com/npm/ca/brightside\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Open a command line window and issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe plugins install @brightside/cics@lts-incremental\n")])])])]),e._v(" "),s("li",[s("p",[e._v("(Optional) After the command execution completes, issue the following command to validate that the installation completed successfully.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe plugins validate @brightside/cics\n")])])]),s("p",[e._v("Successful validation of the IBM CICS plug-in returns the response: "),s("code",[e._v("Successfully validated")]),e._v(".")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"installing-from-a-local-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-from-a-local-package","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing from a local package")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you downloaded the Zowe PAX file and extracted the "),t("code",[this._v("zowe-cli-bundle.zip")]),this._v(" package, complete the following steps to install the Zowe CLI Plug-in for CICS:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Issue the following command to install the plug-in:")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe plugins install zowe-cli-cics.tgz\n")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("(Optional) After the command execution completes, issue the following command to validate that the installation completed successfully.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("zowe plugins validate @brightside/cics\n")])])]),s("p",[e._v("Successful validation of the CICS plug-in returns the response: "),s("code",[e._v("Successfully validated")]),e._v(". You can safely ignore "),s("code",[e._v("*** Warning:")]),e._v(" messages related to Imperative CLI Framework.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creating-a-user-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-user-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a user profile")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe profiles create cics <profile name> -H <host> -P <port> -u <user> -p <password>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" For more information, issue the command "),t("code",[this._v("zowe profiles create cis --help")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Commands")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"#defining-resources-to-cics"}},[e._v("Defining resources to CICS")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#deleting-cics-resources"}},[e._v("Deleting CICS resources")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#discarding-cics-resources"}},[e._v("Discarding CICS resources")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#getting-cics-resources"}},[e._v("Getting CICS resources")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#installing-resources-to-cics"}},[e._v("Installing resources to CICS")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#refreshing-cics-programs"}},[e._v("Refreshing CICS programs")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"defining-resources-to-cics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-resources-to-cics","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining resources to CICS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics define -h\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Example:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Define a program named "),t("code",[this._v("myProgram")]),this._v(" to the region named "),t("code",[this._v("myRegion")]),this._v(" in the CICS system definition (CSD) group "),t("code",[this._v("myGroup:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics define program myProgram myGroup --region-name myRegion\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"deleting-cics-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deleting-cics-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting CICS resources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics delete -h\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Example:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics delete program PGM123 --region-name MYREGION\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"discarding-cics-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discarding-cics-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Discarding CICS resources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics discard -h\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Example:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics discard program PGM123 --region-name MYREGION\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"getting-cics-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-cics-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting CICS resources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics get -h\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Example:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics get resource CICSProgram --region-name MYREGION\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"installing-resources-to-cics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-resources-to-cics","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing resources to CICS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics install -h\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Example:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics install transaction TRN1 MYGRP --region-name MYREGION\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"refreshing-cics-programs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refreshing-cics-programs","aria-hidden":"true"}},[this._v("#")]),this._v(" Refreshing CICS programs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics refresh -h\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Example:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("zowe cics refresh PGM123 --region-name MYREGION\n")])])])}],!1,null,null,null);i.options.__file="cli-cicsplugin.md";t.default=i.exports}}]);