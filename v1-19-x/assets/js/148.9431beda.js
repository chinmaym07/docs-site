(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{545:function(e,r,t){"use strict";t.r(r);var o=t(18),s=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installing-node-js-on-z-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js-on-z-os"}},[e._v("#")]),e._v(" Installing Node.js on z/OS")]),e._v(" "),t("p",[t("strong",[e._v("Note: This section is not required if using Docker or only using the CLI.")])]),e._v(" "),t("p",[e._v("Before you install Zowe™ on z/OS, you must install IBM SDK for Node.js on the same z/OS server that hosts the Zowe Application Server and z/OS Explorer Services. Review the information in this topic to obtain and install Node.js.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#supported-nodejs-versions"}},[e._v("Supported Node.js versions")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#how-to-obtain-ibm-sdk-for-nodejs---zos"}},[e._v("How to obtain IBM SDK for Node.js - z/OS")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#hardware-and-software-prerequisites"}},[e._v("Hardware and software prerequisites")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#installing-the-pax-edition-of-nodejs---zos"}},[e._v("Installing the PAX edition of Node.js - z/OS")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#installing-the-smpe-edition-of-nodejs---zos"}},[e._v("Installing the SMP/E edition of Node.js - z/OS")])])]),e._v(" "),t("h2",{attrs:{id:"supported-node-js-versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-node-js-versions"}},[e._v("#")]),e._v(" Supported Node.js versions")]),e._v(" "),t("p",[e._v("The following Node.js versions are supported to run Zowe. See the "),t("a",{attrs:{href:"#hardware-and-software-prerequisites"}},[e._v("Hardware and software prerequisites")]),e._v(" section for the prerequisites that are required by Zowe.")]),e._v(" "),t("p",[e._v("The corresponding "),t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSWLKB/welcome_nodesdk_family.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Knowledge Center for Node.js - z/OS"),t("OutboundLink")],1),e._v(" lists all the prerequisites for Node.js. Some software packages, which might be listed as prerequisites there, are "),t("strong",[e._v("NOT")]),e._v(" required by Zowe. Specifically, you do "),t("strong",[e._v("NOT")]),e._v(" need to install Python, Make, Perl, or C/C++ runtime or compiler.  If you can run "),t("code",[e._v("node --version")]),e._v(" successfully, you have installed the prerequisites required by Zowe.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("v8.x (except v8.16.1)")]),e._v(" "),t("ul",[t("li",[e._v("z/OS V2R2: PTFs UI62788, UI46658, UI62416, UI62415 (APARs "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH10606",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH10606"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PI79959",target:"_blank",rel:"noopener noreferrer"}},[e._v("PI79959"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH10740",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH10740"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH10741",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH10741"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("z/OS V2R3: PTFs UI61308, UI61375, UI61747 (APARs "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=isg1PH07107",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH0710"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH08352",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH08352"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH09543",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH09543"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("z/OS V2R4: PTFs UI64839, UI64940, UI64837, UI64830 (APARs "),t("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?uid=swg1PH14559",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH14559"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?uid=swg1PH16038",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH16038"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?uid=swg1PH15674",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH15674"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?uid=swg1PH14560",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH14560"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("p",[t("strong",[e._v("Known issue:")]),e._v(" There is a known issue with node.js v8.16.1 and Zowe desktop encoding. See the "),t("a",{attrs:{href:"https://github.com/ibmruntimes/node/issues/142",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub issue"),t("OutboundLink")],1),e._v(" for details.")]),e._v(" "),t("p",[t("strong",[e._v("Workaround:")]),e._v(" Use node.js v8.16.2 or later, which is available at "),t("a",{attrs:{href:"https://www.ibm.com/ca-en/marketplace/sdk-nodejs-compiler-zos",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.ibm.com/ca-en/marketplace/sdk-nodejs-compiler-zos"),t("OutboundLink")],1),e._v(". Download the "),t("code",[e._v("pax.Z")]),e._v(" file.")])]),e._v(" "),t("li",[t("p",[e._v("v12.x")]),e._v(" "),t("ul",[t("li",[e._v("z/OS V2R2: PTFs UI62788, UI46658, UI62416, UI62415 (APARs "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH10606",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH10606"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PI79959",target:"_blank",rel:"noopener noreferrer"}},[e._v("PI79959"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH10740",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH10740"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH10741",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH10741"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("z/OS V2R3: PTFs UI61308, UI61375, UI61747 (APARs "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=isg1PH07107",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH0710"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH08352",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH08352"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH09543",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH09543"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("z/OS V2R4: PTFs UI64839, UI64940, UI64837, UI64830 , UI65567 (APARs "),t("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?uid=swg1PH14559",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH14559"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?uid=swg1PH16038",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH16038"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?uid=swg1PH15674",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH15674"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?uid=swg1PH14560",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH14560"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://www-01.ibm.com/support/docview.wss?uid=swg1PH17481",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH17481"),t("OutboundLink")],1),e._v(")")])])]),e._v(" "),t("li",[t("p",[e._v("v14")]),e._v(" "),t("ul",[t("li",[e._v("z/OS V2R3: PTFs UI61308, UI61375, UI61747 (APARs "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=isg1PH07107",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH07107"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH08352",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH08352"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www-01.ibm.com/support/docview.wss?uid=swg1PH09543",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH09543"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("z/OS V2R4: PTFs UI64830, UI64837, UI64839, UI64940, UI65567 (APARs "),t("a",{attrs:{href:"https://www.ibm.com/support/pages/apar/PH14560",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH14560"),t("OutboundLink")],1),e._v(",\n"),t("a",{attrs:{href:"https://www.ibm.com/support/pages/apar/PH15674",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH15674"),t("OutboundLink")],1),e._v(",\n"),t("a",{attrs:{href:"https://www.ibm.com/support/pages/apar/PH14559",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH14559"),t("OutboundLink")],1),e._v(",\n"),t("a",{attrs:{href:"https://www.ibm.com/support/pages/apar/PH16038",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH16038"),t("OutboundLink")],1),e._v(",\n"),t("a",{attrs:{href:"https://www.ibm.com/support/pages/apar/PH17481",target:"_blank",rel:"noopener noreferrer"}},[e._v("PH17481"),t("OutboundLink")],1),e._v(")")])])])]),e._v(" "),t("h2",{attrs:{id:"how-to-obtain-ibm-sdk-for-node-js-z-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-obtain-ibm-sdk-for-node-js-z-os"}},[e._v("#")]),e._v(" How to obtain IBM SDK for Node.js - z/OS")]),e._v(" "),t("p",[e._v("You can obtain IBM SDK for Node.js - z/OS for free in one of the following ways:")]),e._v(" "),t("ul",[t("li",[e._v("Order the SMP/E edition through your IBM representative for production use")]),e._v(" "),t("li",[e._v("Use the PAX edition for non-production deployments")])]),e._v(" "),t("p",[e._v("For more information, see the blog "),t("a",{attrs:{href:"https://developer.ibm.com/mainframe/2019/04/17/ibm-sdk-for-node-js-z-os-at-no-charge/",target:"_blank",rel:"noopener noreferrer"}},[e._v('"How to obtain IBM SDK for Node.js - z/OS, at no charge"'),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"hardware-and-software-prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware-and-software-prerequisites"}},[e._v("#")]),e._v(" Hardware and software prerequisites")]),e._v(" "),t("p",[e._v("To install Node.js for Zowe, the following requirements must be met.")]),e._v(" "),t("p",[e._v("The corresponding "),t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSWLKB/welcome_nodesdk_family.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Knowledge Center for Node.js - z/OS"),t("OutboundLink")],1),e._v(" lists all the prerequisites for Node.js. Some software packages, which might be listed as prerequisites there, are "),t("strong",[e._v("NOT")]),e._v(" required by Zowe. Specifically, you do "),t("strong",[e._v("NOT")]),e._v(" need to install Python, Make, Perl, or C/C++ runtime or compiler.")]),e._v(" "),t("p",[e._v("If you can run "),t("code",[e._v("node --version")]),e._v(" successfully, you have installed the Node.js prerequisites required by Zowe.")]),e._v(" "),t("p",[t("strong",[e._v("Hardware:")])]),e._v(" "),t("p",[e._v("IBM zEnterprise® 196 (z196) or newer")]),e._v(" "),t("p",[t("strong",[e._v("Software:")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("z/OS UNIX System Services enabled")])]),e._v(" "),t("li",[t("p",[e._v("Integrated Cryptographic Service Facility (ICSF) configured and started")]),e._v(" "),t("p",[e._v("ICSF is required for Node.js to operate successfully on z/OS.  If you have not configured your z/OS environment for ICSF, see "),t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.csfb200/abstract.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cryptographic Services ICSF: System Programmer's Guide"),t("OutboundLink")],1),e._v(".  To see whether ICSF has been started, check whether the started task "),t("code",[e._v("ICSF")]),e._v(" or "),t("code",[e._v("CSF")]),e._v(" is active.")])])]),e._v(" "),t("h2",{attrs:{id:"installing-the-pax-edition-of-node-js-z-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-pax-edition-of-node-js-z-os"}},[e._v("#")]),e._v(" Installing the PAX edition of Node.js - z/OS")]),e._v(" "),t("p",[e._v("Follow these steps to install the PAX edition of Node.js - z/OS to run Zowe.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Download the pax.Z file to a z/OS machine.")])]),e._v(" "),t("li",[t("p",[e._v("Extract the pax.Z file inside an installation directory of your choice. For example:")]),e._v(" "),t("p",[t("code",[e._v("pax -rf <path_to_pax.Z_file> -x pax")])])]),e._v(" "),t("li",[t("p",[e._v("Add the full path of your installation directory to your PATH environment variable:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export PATH=<installation_directory>/bin/:$PATH\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Run the following command from the command line to verify the installation.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node --version\n")])])]),t("p",[e._v("If Node.js is installed correctly, the version of Node.js is displayed.")])]),e._v(" "),t("li",[t("p",[e._v("After you install Node.js, set the "),t("em",[e._v("NODE_HOME")]),e._v(" environment variable to the directory where Node.js is installed. For example, "),t("code",[e._v("NODE_HOME=/proj/mvd/node/installs/node-v6.14.4-os390-s390x")]),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"installing-the-smp-e-edition-of-node-js-z-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-smp-e-edition-of-node-js-z-os"}},[e._v("#")]),e._v(" Installing the SMP/E edition of Node.js - z/OS")]),e._v(" "),t("p",[e._v("To install the SMP/E edition of Node.js, see the "),t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSWLKB/welcome_nodesdk_family.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation for IBM SDK for Node.js - z/OS"),t("OutboundLink")],1),e._v(". Remember that the software packages Perl, Python, Make, or C/C++ runtime or compiler that the Node.js documentation might mention are "),t("strong",[e._v("NOT")]),e._v(" needed by Zowe.")])])}),[],!1,null,null,null);r.default=s.exports}}]);