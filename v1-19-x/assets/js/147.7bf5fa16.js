(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{543:function(e,a,t){"use strict";t.r(a);var o=t(18),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installing-zowe-runtime-docker-image-technical-preview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-runtime-docker-image-technical-preview"}},[e._v("#")]),e._v(" Installing Zowe runtime Docker Image (Technical Preview)")]),e._v(" "),t("Badge",{attrs:{text:"Technical Preview"}}),e._v(" "),t("p",[e._v('Docker is a way to create a pre-packaged set of software and configuration called an "Image". Images are used to create Docker "Containers", which run the Image contents in isolation from the other software running on the same system. Docker containers are the runtime environment, and Images are what they are crated from.')]),e._v(" "),t("p",[e._v("The majority of the Zowe server runtime is available in the form of a Docker Image, among other options.\nTo use this image, you must have set up the Zowe server runtime on z/OS, z/OSMF, or both depending on which Zowe components you will use.")]),e._v(" "),t("p",[e._v("If you have not set up the Zowe server runtime on z/OS, please follow the steps found in "),t("RouterLink",{attrs:{to:"/user-guide/install-docker.html"}},[e._v("Docker Installation Roadmap")]),e._v(".")],1),e._v(" "),t("p",[e._v("This guide assumes you are using Linux or zLinux and have already downloaded Docker itself. If you have not yet done so, please review "),t("RouterLink",{attrs:{to:"/user-guide/systemrequirements.html"}},[e._v("System Requirements")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"installing-via-docker-hub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-via-docker-hub"}},[e._v("#")]),e._v(" Installing via Docker Hub")]),e._v(" "),t("p",[e._v("Zowe's Docker Image is hosted on "),t("a",{attrs:{href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),t("OutboundLink")],1),e._v(", which is the default location from which you can use the Docker command line utility to download and update Docker Images. On Docker Hub, the Zowe server runtime image is named "),t("a",{attrs:{href:"https://hub.docker.com/r/ompzowe/server-bundle",target:"_blank",rel:"noopener noreferrer"}},[e._v("ompzowe/server-bundle"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("You can download a Docker Image by using the Docker command line utility "),t("code",[e._v("docker pull imagename")]),e._v(" where "),t("em",[e._v("imagename")]),e._v(" is one of the following:")]),e._v(" "),t("ul",[t("li",[e._v("The latest version of zowe, "),t("code",[e._v("ompzowe/server-bundle:latest")])]),e._v(" "),t("li",[e._v("The latest version for the platform you are running on, such as "),t("code",[e._v("ompzowe/server-bundle:amd64")]),e._v(" for Linux")]),e._v(" "),t("li",[e._v("A specific version by referencing the version's digest, such as "),t("code",[e._v("ompzowe/server-bundle@sha256:bdbc0617b02e16a452f6d4de50b8b13e56592e309b4c68f9ea52c82303ad57ec")])])]),e._v(" "),t("p",[e._v("The latest digests can be seen on the "),t("a",{attrs:{href:"https://hub.docker.com/r/ompzowe/server-bundle/tags",target:"_blank",rel:"noopener noreferrer"}},[e._v("image's tags page"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"installing-via-direct-download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-via-direct-download"}},[e._v("#")]),e._v(" Installing via direct download")]),e._v(" "),t("p",[e._v("You can install a Docker Image that has been downloaded as a "),t("code",[e._v(".tar")]),e._v(" archive from anywhere, such as "),t("a",{attrs:{href:"https://www.zowe.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe.org"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"loading-an-image-from-tar-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loading-an-image-from-tar-file"}},[e._v("#")]),e._v(" Loading an image from .tar file")]),e._v(" "),t("p",[e._v("To install a Docker Image that you have downloaded as a tar file from somewhere, transfer the file to the destination host and then run the following command: "),t("code",[e._v("docker image load -i path_to_tar")])]),e._v(" "),t("h2",{attrs:{id:"confirming-the-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#confirming-the-installation"}},[e._v("#")]),e._v(" Confirming the installation")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("docker images")]),e._v(" command lists the images a system currently has, which make them available for creating containers from.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# docker images\nREPOSITORY                         TAG                 IMAGE ID            CREATED             SIZE\nompzowe/server-bundle                amd64               ceb8c50d2381        2 hours ago         1.27GB\n")])])]),t("h2",{attrs:{id:"upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),t("p",[e._v("Once installed, it is possible to upgrade an image by using "),t("code",[e._v("docker pull")]),e._v(" with the same "),t("em",[e._v("imagename")]),e._v(" as before, or by using "),t("code",[e._v("docker image load")]),e._v(" to load another image of the same type.\nNewer containers can be created from newer images. In Zowe, configuration can be persisted between containers. More information on this subject can be found in "),t("RouterLink",{attrs:{to:"/user-guide/configuring-docker.html"}},[e._v("Configuring Docker Container")]),e._v(" documentation.")],1),e._v(" "),t("p",[e._v("When upgrading, it is possible that the previous image may persist.\nYou may see the old image tagged as "),t("code",[e._v("<none>")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# docker images\nREPOSITORY                         TAG                 IMAGE ID            CREATED             SIZE\nompzowe/server-bundle                amd64               ceb8c50d2381        2 hours ago         1.27GB\n<none>                             <none>              1e52fadc2918        2 weeks ago         3.03GB\n")])])]),t("p",[e._v("If you see this and want to clean up the older images to preserve storage space, you can run the command "),t("code",[e._v("docker rmi IMAGE_ID")]),e._v(" to remove an image, where IMAGE_ID is the code seen from the "),t("code",[e._v("images")]),e._v(" command.")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);