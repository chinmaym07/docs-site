(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{589:function(e,o,t){"use strict";t.r(o);var n=t(18),s=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"known-zowe-cli-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-zowe-cli-issues"}},[e._v("#")]),e._v(" Known Zowe CLI issues")]),e._v(" "),t("p",[e._v("The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior installing and using Zowe™ CLI.")]),e._v(" "),t("h2",{attrs:{id:"eaccess-error-when-issing-npm-install-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eaccess-error-when-issing-npm-install-command"}},[e._v("#")]),e._v(" EACCESS error when issing "),t("code",[e._v("npm install")]),e._v(" command")]),e._v(" "),t("p",[t("strong",[e._v("Valid on Windows, Mac, or Linux")])]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("An "),t("code",[e._v("EACCESS")]),e._v(" error is returned when you issue the "),t("code",[e._v("npm install -g")]),e._v(" command to install a package from Zowe.org or npm.")]),e._v(" "),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("To resolve the issue, follow the steps described in "),t("a",{attrs:{href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"}},[e._v("Resolving EACCESS permissions errors when installing packages globally"),t("OutboundLink")],1),e._v(" in the npm documentation.")]),e._v(" "),t("h2",{attrs:{id:"command-not-found-message-displays-when-issuing-npm-install-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-not-found-message-displays-when-issuing-npm-install-commands"}},[e._v("#")]),e._v(" "),t("em",[e._v("Command not found")]),e._v(" message displays when issuing "),t("code",[e._v("npm install")]),e._v(" commands")]),e._v(" "),t("p",[t("strong",[e._v("Valid on all supported platforms")])]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("When you issue NPM commands to install the CLI, the message "),t("em",[e._v("command not found")]),e._v(" displays. The message indicates that Node.js and NPM are not installed on your computer, or that PATH does not contain the correct path to the NodeJS folder.")]),e._v(" "),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("To correct this behavior, verify the following:")]),e._v(" "),t("ul",[t("li",[e._v("Node.js and NPM are installed.")]),e._v(" "),t("li",[e._v("PATH contains the correct path to the NodeJS folder.")])]),e._v(" "),t("p",[t("strong",[e._v("More Information:")]),e._v(" "),t("RouterLink",{attrs:{to:"/user-guide/systemrequirements.html"}},[e._v("System requirements for Zowe CLI")])],1),e._v(" "),t("h2",{attrs:{id:"npm-install-gcommand-fails-due-to-an-eperm-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-gcommand-fails-due-to-an-eperm-error"}},[e._v("#")]),e._v(" "),t("code",[e._v("npm install -g")]),e._v("Command Fails Due to an EPERM Error")]),e._v(" "),t("p",[t("strong",[e._v("Valid on Windows")])]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("This behavior is due to a problem with Node Package Manager (npm). There\nis an open issue on the npm GitHub repository to fix the defect.")]),e._v(" "),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("If you encounter this problem, some users report that repeatedly\nattempting to install Zowe CLI yields success. Some users also\nreport success using the following workarounds:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Issue the "),t("code",[e._v("npm cache clean")]),e._v(" command.")])]),e._v(" "),t("li",[t("p",[e._v("Uninstall and reinstall Zowe CLI. For more information,\nsee "),t("RouterLink",{attrs:{to:"/user-guide/cli-installcli.html"}},[e._v("Install Zowe CLI")]),e._v(".")],1)]),e._v(" "),t("li",[t("p",[t("code",[e._v("Add the --no-optional")]),e._v(" flag to the end of the "),t("code",[e._v("npm install")]),e._v(" command.")])])]),e._v(" "),t("h2",{attrs:{id:"sudo-syntax-required-to-complete-some-installations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sudo-syntax-required-to-complete-some-installations"}},[e._v("#")]),e._v(" "),t("code",[e._v("Sudo")]),e._v(" syntax required to complete some installations")]),e._v(" "),t("p",[t("strong",[e._v("Valid on Linux and macOS")])]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("The installation fails on Linux or macOS.")]),e._v(" "),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("Depending on how you configured Node.js on Linux or macOS, you might need to add the prefix "),t("code",[e._v("sudo")]),e._v(" before the "),t("code",[e._v("npm install -g")]),e._v(" command or the "),t("code",[e._v("npm uninstall -g")]),e._v(" command. This step gives Node.js write access to the installation directory.")]),e._v(" "),t("h2",{attrs:{id:"npm-install-g-command-fails-due-to-npm-err-cannot-read-property-pause-of-undefined-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-g-command-fails-due-to-npm-err-cannot-read-property-pause-of-undefined-error"}},[e._v("#")]),e._v(" "),t("code",[e._v("npm install -g")]),e._v(" command fails due to "),t("code",[e._v("npm ERR! Cannot read property 'pause' of undefined")]),e._v(" error")]),e._v(" "),t("p",[t("strong",[e._v("Valid on Windows or Linux")])]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("You receive the error message "),t("code",[e._v("npm ERR! Cannot read property 'pause' of undefined")]),e._v(" when you attempt to install the product.")]),e._v(" "),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("This behavior is due to a problem with Node Package Manager (npm). If\nyou encounter this problem, revert to a previous version of npm that\ndoes not contain this defect. To revert to a previous version of npm,\nissue the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install npm@5.3.0 -g\n")])])]),t("h2",{attrs:{id:"node-js-commands-do-not-respond-as-expected"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-commands-do-not-respond-as-expected"}},[e._v("#")]),e._v(" Node.js commands do not respond as expected")]),e._v(" "),t("p",[t("strong",[e._v("Valid on Windows or Linux")])]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("You attempt to issue node.js commands and you do not receive the expected  output.")]),e._v(" "),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("There might be a program that is named "),t("em",[e._v("node")]),e._v(" on your path. The Node.js installer automatically adds a program that is named "),t("em",[e._v("node")]),e._v(" to your path. When there are pre-existing programs that are named "),t("em",[e._v("node")]),e._v(" on your computer, the program that appears first in the path is used. To correct this behavior, change the order of the programs in the path so that Node.js appears first.")]),e._v(" "),t("h2",{attrs:{id:"installation-fails-on-oracle-linux-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-fails-on-oracle-linux-6"}},[e._v("#")]),e._v(" Installation fails on Oracle Linux 6")]),e._v(" "),t("p",[t("strong",[e._v("Valid on Oracle Linux 6")])]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("You receive error messages when you attempt to install the product on an\nOracle Linux 6 operating system.")]),e._v(" "),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("Install the product on Oracle Linux 7 or another Linux or Windows OS. Zowe CLI is not compatible with Oracle Linux 6.")])])}),[],!1,null,null,null);o.default=s.exports}}]);