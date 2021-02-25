(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{449:function(e,t,r){e.exports=r.p+"assets/img/zowe-docker-install-diagram.18deba41.png"},541:function(e,t,r){"use strict";r.r(t);var o=r(18),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"docker-installation-roadmap-technical-preview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-installation-roadmap-technical-preview"}},[e._v("#")]),e._v(" Docker Installation Roadmap (Technical Preview)")]),e._v(" "),o("Badge",{attrs:{text:"Technical Preview"}}),e._v(" The Zowe Docker build is a technical preview. Technical previews are for testing only and not ready for production. Any feedback that you can provide is highly appreciated.\n"),o("p",[e._v("There are three parts to using Docker to install Zowe™.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The Zowe z/OS runtime which contains the ZSS component.")])]),e._v(" "),o("li",[o("p",[e._v("The Zowe Cross Memory Server. This is an authorized server application that provides privileged services to Zowe in a secure manner.")])]),e._v(" "),o("li",[o("p",[e._v("The Zowe Docker image, which runs on a Linux or zLinux host. It consists of three components: Zowe Application Framework, z/OS Explorer Services, and Zowe API Mediation Layer.")])])]),e._v(" "),o("p",[e._v("Using the Zowe Docker bundle first requires setting up your z/OS system for Zowe. The steps for z/OS setup are detailed on the page: "),o("RouterLink",{attrs:{to:"/user-guide/install-zos.html"}},[e._v("Installing Zowe Server Components on z/OS")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("NOTE")]),e._v(": If you want to install all server components on z/OS instead of using Docker, completing the z/OS install instructions in the above document is all that is required.")]),e._v(" "),o("p",[e._v("Review the installation diagram and the introduction in this topic to see the general installation sequence and the most important tasks that are to be performed during installation and configuration.")]),e._v(" "),o("p",[o("strong",[e._v("NOTE")]),e._v(": You can click each step on the diagram for detailed instructions.")]),e._v(" "),o("figure",[o("img",{attrs:{usemap:"#home_map1",border:"0",id:"install-flow",src:r(449),width:"850",alt:"Click each step to get more details on the flow."}}),e._v(" "),o("figcaption")]),e._v(" "),o("map",{attrs:{name:"home_map1",id:"home_map1"}},[o("area",{attrs:{href:"installandconfig.html#planning-the-installation-of-zowe-server-components",alt:"Plan and prepare for the installation",title:"Plan and prepare for the installation",shape:"rect",coords:"326, 63, 474, 105"}}),e._v(" "),o("area",{attrs:{href:"systemrequirements.html",alt:"Configure system requirements",title:"Configure system requirements",shape:"rect",coords:"318, 183, 467, 224"}}),e._v(" "),o("area",{attrs:{href:"https://www.zowe.org/download.html",alt:"Download Zowe SMP/E build",title:"Download the Zowe SMP/E build from zowe.org",shape:"rect",coords:"131, 308, 304, 348"}}),e._v(" "),o("area",{attrs:{href:"install-zowe-smpe.html",alt:"Install the Zowe SMP/E build using JCLs",title:"Install the Zowe SMP/E build using JCLs",shape:"rect",coords:"54, 498, 188, 555"}}),e._v(" "),o("area",{attrs:{href:"install-zowe-smpe-zosmf-workflow.html",alt:"Install the Zowe SMP/E build with z/OSMF workflow",title:"Install the Zowe SMP/E build with z/OSMF workflow",shape:"rect",coords:"250, 498, 391, 555"}}),e._v(" "),o("area",{attrs:{href:"https://www.zowe.org/download.html",alt:"Download the Zowe convenience build",title:"Download the Zowe convenience build from zowe.org",shape:"rect",coords:"527, 299, 694, 344"}}),e._v(" "),o("area",{attrs:{href:"install-zowe-zos-convenience-build.html#obtaining-and-preparing-the-convenience-build",alt:"Verify, transfer, and expand the PAX file on z/OS",title:"Verify, transfer, and expand the PAX file on z/OS",shape:"rect",coords:"526, 368, 696, 410"}}),e._v(" "),o("area",{attrs:{href:"install-zowe-zos-convenience-build.html#installing-the-zowe-runtime",alt:"Install the Zowe runtime using shell script",title:"Install the Zowe runtime using shell script",shape:"rect",coords:"450, 500, 574, 552"}}),e._v(" "),o("area",{attrs:{href:"install-zowe-zos-convenience-build.html#installing-the-zowe-runtime",alt:"Install the Zowe runtime with z/OSMF workflow",title:"Install the Zowe runtime with z/OSMF workflow",shape:"rect",coords:"647, 499, 774, 554"}}),e._v(" "),o("area",{attrs:{href:"configure-zos-system.html",alt:"Configure the z/OS system for Zowe using ZWESECUR",title:"Configure the z/OS system for Zowe using ZWESECUR",shape:"rect",coords:"121, 756, 426, 808"}}),e._v(" "),o("area",{attrs:{href:"configure-certificates.html",alt:"Configure Zowe certificates using shell script",title:"Create the Zowe certificates keystore directory using shell script",shape:"rect",coords:"124, 830, 426, 882"}}),e._v(" "),o("area",{attrs:{href:"configure-xmem-server.html",alt:"Configure the Zowe cross memory server using shell script",title:"Install and configure the Zowe cross memory server (ZWESISTC) using shell script",shape:"rect",coords:"123, 909, 426, 952"}}),e._v(" "),o("area",{attrs:{href:"configure-instance-directory.html",alt:"Create and configure the Zowe instance directory using shell script",title:"Create and configure the Zowe instance directory using shell script",shape:"rect",coords:"121, 976, 426, 1038"}}),e._v(" "),o("area",{attrs:{href:"configure-zowe-server.html",alt:"Install and start the Zowe started task using shell script",title:"Install and start the Zowe started task (ZWESVSTC) using shell script",shape:"rect",coords:"125, 1065, 426, 1117"}}),e._v(" "),o("area",{attrs:{href:"configure-zowe-zosmf-workflow.html#configure-z-os-security-manager",alt:"Configure Zowe security manager with z/OSMF workflow",title:"Configure Zowe security manager with z/OSMF workflow",shape:"rect",coords:"515, 759, 757, 805"}}),e._v(" "),o("area",{attrs:{href:"configure-zowe-zosmf-workflow.html#configure-zowe-certificates",alt:"Configure Zowe certificates with z/OSMF workflow",title:"Configure Zowe certificates with z/OSMF workflow",shape:"rect",coords:"515, 832, 754, 882"}}),e._v(" "),o("area",{attrs:{href:"configure-zowe-zosmf-workflow.html#configure-zowe-cross-memory-server",alt:"Configure Zowe Cross Memory Server with z/OSMF workflow",title:"Configure Zowe Cross Memory Server with z/OSMF workflow",shape:"rect",coords:"515, 905, 757, 960"}}),e._v(" "),o("area",{attrs:{href:"configure-zowe-zosmf-workflow.html#create-and-configure-the-zowe-instance-directory-and-start-the-zowe-started-task",alt:"Create and configure the Zowe instance directory and start Zowe with z/OSMF workflow",title:"Create and configure the Zowe instance directory and start Zowe with z/OSMF workflow",shape:"rect",coords:"513, 977, 757, 1042"}}),e._v(" "),o("area",{attrs:{href:"verify-zowe-runtime-install.html",alt:"Verify Zowe installation on z/OS",title:"Verify Zowe installation on z/OS",shape:"rect",coords:"224, 1154, 616, 1198"}}),e._v(" "),o("area",{attrs:{href:"install-docker-image.html#installing-via-docker-hub",alt:"Pull image from Docker Hub",title:"Pull image from Docker Hub",shape:"rect",coords:"46, 1390, 416, 1445"}}),e._v(" "),o("area",{attrs:{href:"install-docker-image.html#installing-via-direct-download",alt:"Download image tarball",title:"Download image tarball",shape:"rect",coords:"495, 1390, 780, 1445"}}),e._v(" "),o("area",{attrs:{href:"install-docker-image.html#loading-an-image-from-tarball",alt:"Load image into Docker",title:"Load image into Docker",shape:"rect",coords:"495, 1465, 780, 1515"}}),e._v(" "),o("area",{attrs:{href:"configuring-docker.html#quick-start-for-the-zowe-runtime-in-docker",alt:"Copy sample scripts and instance out of container",title:"Copy sample scripts and instance out of container",shape:"rect",coords:"250, 1605, 610, 1660"}}),e._v(" "),o("area",{attrs:{href:"configuring-docker.html#using-an-instance-directory-external-to-the-container",alt:"Configure external instance",title:"Configure external instance",shape:"rect",coords:"250, 1680, 610, 1735"}}),e._v(" "),o("area",{attrs:{href:"configuring-docker.html#using-external-certificates",alt:"Configure security certificates",title:"Configure security certificates",shape:"rect",coords:"250, 1755, 610, 1810"}})]),e._v(" "),o("h2",{attrs:{id:"stage-1-plan-and-prepare"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-1-plan-and-prepare"}},[e._v("#")]),e._v(" Stage 1: Plan and prepare")]),e._v(" "),o("p",[e._v("Before you start the installation, review the information on hardware and software requirements and other considerations. See "),o("RouterLink",{attrs:{to:"/user-guide/installandconfig.html"}},[e._v("Planning the installation")]),e._v(" for details.")],1),e._v(" "),o("h2",{attrs:{id:"stage-2-install-the-zowe-runtime-on-z-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-2-install-the-zowe-runtime-on-z-os"}},[e._v("#")]),e._v(" Stage 2: Install the Zowe runtime on z/OS")]),e._v(" "),o("p",[e._v("Complete the tasks in "),o("strong",[e._v("Stage 2")]),e._v(" of "),o("RouterLink",{attrs:{to:"/user-guide/install-zos.html#stage-2-install-the-zowe-z-os-runtime"}},[e._v("z/OS Installation Roadmap")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"stage-3-configure-the-zowe-z-os-runtime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-3-configure-the-zowe-z-os-runtime"}},[e._v("#")]),e._v(" Stage 3: Configure the Zowe z/OS runtime")]),e._v(" "),o("p",[e._v("First you must complete the tasks in "),o("strong",[e._v("Stage 3")]),e._v(" of "),o("RouterLink",{attrs:{to:"/user-guide/install-zos.html#stage-3-configure-the-zowe-z-os-runtime"}},[e._v("z/OS installation Roadmap")]),e._v(".")],1),e._v(" "),o("p",[e._v("After, you should edit or review the chosen Component groups in the Zowe instance directory that was created. For use with Docker, only the Component group ZSS is required. This means that at minimum, the file "),o("code",[e._v("instance.env")]),e._v(" will have the value "),o("code",[e._v("LAUNCH_OMPONENT_GROUPS=ZSS")]),e._v(" set. See "),o("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html#component-groups"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"stage-4-verify-the-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-4-verify-the-installation"}},[e._v("#")]),e._v(" Stage 4: Verify the installation")]),e._v(" "),o("p",[e._v("Verify that Zowe is installed correctly on z/OS. See "),o("RouterLink",{attrs:{to:"/user-guide/verify-zowe-runtime-install.html"}},[e._v("Verifying Zowe installation on z/OS")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"stage-5-install-docker-image"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-5-install-docker-image"}},[e._v("#")]),e._v(" Stage 5: Install Docker image")]),e._v(" "),o("p",[e._v("Get the latest Docker Image for the Zowe Server Components. See "),o("RouterLink",{attrs:{to:"/user-guide/install-docker-image.html"}},[e._v("Installing Zowe runtime Docker Image")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"stage-6-configure-docker-container"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stage-6-configure-docker-container"}},[e._v("#")]),e._v(" Stage 6: Configure Docker container")]),e._v(" "),o("p",[e._v("Extract and customize the start script, instance directory, and keystore before running a Docker container. See "),o("RouterLink",{attrs:{to:"/user-guide/configuring-docker.html"}},[e._v("Configuring Zowe runtime Docker Container")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"looking-for-troubleshooting-help"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#looking-for-troubleshooting-help"}},[e._v("#")]),e._v(" Looking for troubleshooting help?")]),e._v(" "),o("p",[e._v("If you encounter unexpected behavior when installing or verifying the Zowe runtime on z/OS, see the "),o("RouterLink",{attrs:{to:"/troubleshoot/troubleshooting.html"}},[e._v("Troubleshooting")]),e._v(" section for tips.")],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);