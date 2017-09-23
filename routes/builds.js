var express = require('express');
var router = express.Router();
const buildsRepository = require('../dal/buildRepository');

function extractToBuild(buildRequest) {
    return {application: buildRequest.projectName, deployStatus: buildRequest.buildStatus, buildData: buildRequest}
}

const exampleResponse = {
    "build": {
        "buildStatus": "Compilation error: javac2",
        "buildResult": "failure",
        "buildResultPrevious": "failure",
        "buildResultDelta": "unchanged",
        "notifyType": "buildFinished",
        "buildFullName": "tcPlugins :: TeamCity Rest API 9.1",
        "buildName": "TeamCity Rest API 9.1",
        "buildId": "746",
        "buildTypeId": "TcPlugins_TeamCityRestApi91",
        "buildInternalTypeId": "bt11",
        "buildExternalTypeId": "TcPlugins_TeamCityRestApi91",
        "buildStatusUrl": "http://ubuntu-teamcity-01:8111//viewLog.html?buildTypeId=TcPlugins_TeamCityRestA" +
                "pi91&buildId=746",
        "buildStatusHtml": "<span class=\"tcWebHooksMessage\"><a href=\"http://ubuntu-teamcity-01:8111//proj" +
                "ect.html?projectId=TcPlugins\">tcPlugins</a> :: <a href=\"http://ubuntu-teamcity" +
                "-01:8111//viewType.html?buildTypeId=TcPlugins_TeamCityRestApi91\">TeamCity Rest " +
                "API 9.1</a> # <a href=\"http://ubuntu-teamcity-01:8111//viewLog.html?buildTypeId" +
                "=TcPlugins_TeamCityRestApi91&buildId=746\"><strong>2</strong></a> has <strong>fi" +
                "nished</strong> with a status of <a href=\"http://ubuntu-teamcity-01:8111//viewL" +
                "og.html?buildTypeId=TcPlugins_TeamCityRestApi91&buildId=746\"> <strong>failure</" +
                "strong></a> and was triggered by <strong>netwolfuk</strong></span>",
        "rootUrl": "http://ubuntu-teamcity-01:8111/",
        "projectName": "tcPlugins",
        "projectId": "TcPlugins",
        "projectInternalId": "project1",
        "projectExternalId": "TcPlugins",
        "buildNumber": "2",
        "agentName": "Default Agent",
        "agentOs": "Linux, version 3.11.0-15-generic",
        "agentHostname": "localhost",
        "triggeredBy": "netwolfuk",
        "message": "Build tcPlugins :: TeamCity Rest API 9.1 has finished. This is build number 2, h" +
                "as a status of \"failure\" and was triggered by netwolfuk",
        "text": "tcPlugins :: TeamCity Rest API 9.1 has finished. Status: failure",
        "buildStateDescription": "finished",
        "buildRunners": ["Ant"],
        "buildTags": [],
        "extraParameters": [
            {
                "name": "body.failed",
                "value": "{ \"text\": \"oh no!, we failed\"}"
            }, {
                "name": "body.passed",
                "value": "{ \"text\": \"woot!, we passed\"}"
            }
        ],
        "teamcityProperties": [
            {
                "name": "build.counter",
                "value": "2"
            }, {
                "name": "build.number",
                "value": "2"
            }, {
                "name": "build.vcs.number",
                "value": "8196"
            }, {
                "name": "build.vcs.number.1",
                "value": "8196"
            }, {
                "name": "build.vcs.number.TcPlugins_JetbrainsTeamcitySvn",
                "value": "8196"
            }, {
                "name": "env.BUILD_NUMBER",
                "value": "2"
            }, {
                "name": "env.BUILD_VCS_NUMBER",
                "value": "8196"
            }, {
                "name": "env.BUILD_VCS_NUMBER_TcPlugins_JetbrainsTeamcitySvn",
                "value": "8196"
            }, {
                "name": "env.GEM_HOME",
                "value": "/home/netwolfuk/.rvm/gems/ruby-1.9.3-p545"
            }, {
                "name": "env.GEM_PATH",
                "value": "/home/netwolfuk/.rvm/gems/ruby-1.9.3-p545:/home/netwolfuk/.rvm/gems/ruby-1.9.3-p" +
                        "545@global"
            }, {
                "name": "env.HOME",
                "value": "/home/netwolfuk"
            }, {
                "name": "env.IRBRC",
                "value": "/home/netwolfuk/.rvm/rubies/ruby-1.9.3-p545/.irbrc"
            }, {
                "name": "env.JAVA_HOME",
                "value": "/opt/Java/jdk1.8.0_65"
            }, {
                "name": "env.JDK_16",
                "value": "/opt/java/jdk1.6.0_33"
            }, {
                "name": "env.JDK_18",
                "value": "/opt/Java/jdk1.8.0_65"
            }, {
                "name": "env.JDK_18_x64",
                "value": "/opt/Java/jdk1.8.0_65"
            }, {
                "name": "env.JDK_HOME",
                "value": "/opt/Java/jdk1.8.0_65"
            }, {
                "name": "env.JRE_HOME",
                "value": "/opt/Java/jdk1.8.0_65"
            }, {
                "name": "env.LANG",
                "value": "en_NZ.UTF-8"
            }, {
                "name": "env.LANGUAGE",
                "value": "en_NZ:en"
            }, {
                "name": "env.LESSCLOSE",
                "value": "/usr/bin/lesspipe %s %s"
            }, {
                "name": "env.LESSOPEN",
                "value": "| /usr/bin/lesspipe %s"
            }, {
                "name": "env.LOGNAME",
                "value": "netwolfuk"
            }, {
                "name": "env.LS_COLORS",
                "value": "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:" +
                        "or=40;31;01:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar" +
                        "=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:" +
                        "*.txz=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lz=01;31:*.x" +
                        "z=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*" +
                        ".rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.ace=01;" +
                        "31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif" +
                        "=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*" +
                        ".xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=0" +
                        "1;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*." +
                        "webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;" +
                        "35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi" +
                        "=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.y" +
                        "uv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35" +
                        ":*.aac=00;36:*.au=00;36:*.flac=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=" +
                        "00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.axa=00;36:*.oga=00;36:*.s" +
                        "px=00;36:*.xspf=00;36:"
            }, {
                "name": "env.MAIL",
                "value": "/var/mail/netwolfuk"
            }, {
                "name": "env.MY_RUBY_HOME",
                "value": "/home/netwolfuk/.rvm/rubies/ruby-1.9.3-p545"
            }, {
                "name": "env.NLSPATH",
                "value": "/usr/dt/lib/nls/msg/%L/%N.cat"
            }, {
                "name": "env.NODE_PATH",
                "value": "/usr/lib/nodejs:/usr/lib/node_modules:/usr/share/javascript"
            }, {
                "name": "env.OLDPWD",
                "value": "/opt/TeamCity/buildAgent/bin"
            }, {
                "name": "env.PATH",
                "value": "/home/netwolfuk/.rvm/gems/ruby-1.9.3-p545/bin:/home/netwolfuk/.rvm/gems/ruby-1.9" +
                        ".3-p545@global/bin:/home/netwolfuk/.rvm/rubies/ruby-1.9.3-p545/bin:/opt/Java/jdk" +
                        "1.8.0_65/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/g" +
                        "ames:/home/netwolfuk/.rvm/bin"
            }, {
                "name": "env.PWD",
                "value": "/opt/TeamCity/buildAgent/bin"
            }, {
                "name": "env.SHELL",
                "value": "/bin/bash"
            }, {
                "name": "env.SHLVL",
                "value": "1"
            }, {
                "name": "env.SSH_CLIENT",
                "value": "192.168.1.20 60849 22"
            }, {
                "name": "env.SSH_CONNECTION",
                "value": "192.168.1.20 60849 172.16.1.72 22"
            }, {
                "name": "env.SSH_TTY",
                "value": "/dev/pts/0"
            }, {
                "name": "env.TEAMCITY_BUILDCONF_NAME",
                "value": "TeamCity Rest API 9.1"
            }, {
                "name": "env.TEAMCITY_BUILD_PROPERTIES_FILE",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp/teamcity.build323189075308" +
                        "1482524.properties"
            }, {
                "name": "env.TEAMCITY_CAPTURE_ENV",
                "value": "\"/opt/Java/jdk1.8.0_65/jre/bin/java\" -jar \"/opt/TeamCity-9.1.3/TeamCity/build" +
                        "Agent/plugins/environment-fetcher/bin/env-fetcher.jar\""
            }, {
                "name": "env.TEAMCITY_GIT_PATH",
                "value": "/usr/bin/git"
            }, {
                "name": "env.TEAMCITY_PROJECT_NAME",
                "value": "tcPlugins"
            }, {
                "name": "env.TEAMCITY_SERVER_MEM_OPTS",
                "value": "-Xmx512m -XX:MaxPermSize=270m -Xdebug -Xrunjdwp:transport=dt_socket,address=8000" +
                        ",server=y,suspend=n"
            }, {
                "name": "env.TEAMCITY_VERSION",
                "value": "9.1.3 (build 37176)"
            }, {
                "name": "env.TEMP",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp"
            }, {
                "name": "env.TERM",
                "value": "xterm"
            }, {
                "name": "env.TMP",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp"
            }, {
                "name": "env.TMPDIR",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp"
            }, {
                "name": "env.USER",
                "value": "netwolfuk"
            }, {
                "name": "env.XDG_SESSION_COOKIE",
                "value": "5363a53ca15ab152ce5c5b170000018a-1455435949.311988-1467593676"
            }, {
                "name": "env.XFILESEARCHPATH",
                "value": "/usr/dt/app-defaults/%L/Dt"
            }, {
                "name": "env._",
                "value": "./runAll.sh"
            }, {
                "name": "env._system_arch",
                "value": "x86_64"
            }, {
                "name": "env._system_name",
                "value": "Ubuntu"
            }, {
                "name": "env._system_type",
                "value": "Linux"
            }, {
                "name": "env._system_version",
                "value": "12.04"
            }, {
                "name": "env.rvm_bin_path",
                "value": "/home/netwolfuk/.rvm/bin"
            }, {
                "name": "env.rvm_path",
                "value": "/home/netwolfuk/.rvm"
            }, {
                "name": "env.rvm_prefix",
                "value": "/home/netwolfuk"
            }, {
                "name": "env.rvm_version",
                "value": "1.25.22 (stable)"
            }, {
                "name": "env.teamcity.distribution",
                "value": "/opt/TeamCity"
            }, {
                "name": "rvm.rubies.list",
                "value": "ruby-1.9.3-p545"
            }, {
                "name": "system.agent.home.dir",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent"
            }, {
                "name": "system.agent.name",
                "value": "Default Agent"
            }, {
                "name": "system.agent.work.dir",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/work"
            }, {
                "name": "system.build.number",
                "value": "2"
            }, {
                "name": "system.build.vcs.number",
                "value": "8196"
            }, {
                "name": "system.build.vcs.number.1",
                "value": "8196"
            }, {
                "name": "system.build.vcs.number.TcPlugins_JetbrainsTeamcitySvn",
                "value": "8196"
            }, {
                "name": "system.java.io.tmpdir",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp"
            }, {
                "name": "system.jdk6",
                "value": "/opt/java/jdk1.6.0_33"
            }, {
                "name": "system.jdk7",
                "value": "/opt/java/jdk1.7.0_51"
            }, {
                "name": "system.jdk8",
                "value": "/opt/java/jdk1.8.0_65"
            }, {
                "name": "system.path.macro.TeamCityDistribution",
                "value": "/opt/TeamCity"
            }, {
                "name": "system.teamcity.agent.cpuBenchmark",
                "value": "591"
            }, {
                "name": "system.teamcity.agent.dotnet.agent_url",
                "value": "http://localhost:9090/RPC2"
            }, {
                "name": "system.teamcity.agent.dotnet.build_id",
                "value": "746"
            }, {
                "name": "system.teamcity.auth.password",
                "value": "ZObmMT46thP7HcTC9OoqJ65V68VLkkM6"
            }, {
                "name": "system.teamcity.auth.userId",
                "value": "TeamCityBuildId=746"
            }, {
                "name": "system.teamcity.build.changedFiles.file",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp/changedFiles83725866949042" +
                        "98650.txt"
            }, {
                "name": "system.teamcity.build.checkoutDir",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/work/22fcbd783f91fe04"
            }, {
                "name": "system.teamcity.build.properties.file",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp/teamcity.build323189075308" +
                        "1482524.properties"
            }, {
                "name": "system.teamcity.build.tempDir",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp"
            }, {
                "name": "system.teamcity.buildConfName",
                "value": "TeamCity Rest API 9.1"
            }, {
                "name": "system.teamcity.buildType.id",
                "value": "TcPlugins_TeamCityRestApi91"
            }, {
                "name": "system.teamcity.configuration.properties.file",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp/teamcity.config15997092793" +
                        "72197197.properties"
            }, {
                "name": "system.teamcity.projectName",
                "value": "tcPlugins"
            }, {
                "name": "system.teamcity.runner.properties.file",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp/teamcity.runner13350886647" +
                        "52358284.properties"
            }, {
                "name": "system.teamcity.tests.recentlyFailedTests.file",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/temp/buildTmp/testsToRunFirst85552431542" +
                        "6474870.txt"
            }, {
                "name": "system.teamcity.version",
                "value": "9.1.3 (build 37176)"
            }, {
                "name": "teamcity.agent.hardware.cpuCount",
                "value": "2"
            }, {
                "name": "teamcity.agent.hardware.memorySizeMb",
                "value": "2001"
            }, {
                "name": "teamcity.agent.home.dir",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent"
            }, {
                "name": "teamcity.agent.jvm.file.encoding",
                "value": "UTF-8"
            }, {
                "name": "teamcity.agent.jvm.file.separator",
                "value": "/"
            }, {
                "name": "teamcity.agent.jvm.os.arch",
                "value": "amd64"
            }, {
                "name": "teamcity.agent.jvm.os.name",
                "value": "Linux"
            }, {
                "name": "teamcity.agent.jvm.os.version",
                "value": "3.11.0-15-generic"
            }, {
                "name": "teamcity.agent.jvm.path.separator",
                "value": ":"
            }, {
                "name": "teamcity.agent.jvm.specification",
                "value": "1.8"
            }, {
                "name": "teamcity.agent.jvm.user.country",
                "value": "NZ"
            }, {
                "name": "teamcity.agent.jvm.user.home",
                "value": "/home/netwolfuk"
            }, {
                "name": "teamcity.agent.jvm.user.language",
                "value": "en"
            }, {
                "name": "teamcity.agent.jvm.user.name",
                "value": "netwolfuk"
            }, {
                "name": "teamcity.agent.jvm.user.timezone",
                "value": "Pacific/Auckland"
            }, {
                "name": "teamcity.agent.jvm.version",
                "value": "1.8.0_65"
            }, {
                "name": "teamcity.agent.launcher.version",
                "value": "37176"
            }, {
                "name": "teamcity.agent.name",
                "value": "Default Agent"
            }, {
                "name": "teamcity.agent.ownPort",
                "value": "9090"
            }, {
                "name": "teamcity.agent.protocol",
                "value": "xml-rpc"
            }, {
                "name": "teamcity.agent.tools.dir",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools"
            }, {
                "name": "teamcity.agent.work.dir",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/work"
            }, {
                "name": "teamcity.agent.work.dir.freeSpaceMb",
                "value": "42053"
            }, {
                "name": "teamcity.build.checkoutDir",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/work/22fcbd783f91fe04"
            }, {
                "name": "teamcity.build.default.checkoutDir",
                "value": "22fcbd783f91fe04"
            }, {
                "name": "teamcity.build.id",
                "value": "746"
            }, {
                "name": "teamcity.build.triggeredBy",
                "value": "netwolfuk"
            }, {
                "name": "teamcity.build.triggeredBy.username",
                "value": "netwolfuk"
            }, {
                "name": "teamcity.dotCover.home",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/dotCover"
            }, {
                "name": "teamcity.project.id",
                "value": "TcPlugins"
            }, {
                "name": "teamcity.serverUrl",
                "value": "http://localhost:8111"
            }, {
                "name": "teamcity.tool.ant-net-tasks",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/ant-net-tasks"
            }, {
                "name": "teamcity.tool.dotCover",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/dotCover"
            }, {
                "name": "teamcity.tool.gant",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/gant"
            }, {
                "name": "teamcity.tool.idea",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/idea"
            }, {
                "name": "teamcity.tool.jacoco",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/jacoco"
            }, {
                "name": "teamcity.tool.jps",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/jps"
            }, {
                "name": "teamcity.tool.jps-old",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/jps-old"
            }, {
                "name": "teamcity.tool.maven",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/maven"
            }, {
                "name": "teamcity.tool.maven3",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/maven3"
            }, {
                "name": "teamcity.tool.maven3_1",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/maven3_1"
            }, {
                "name": "teamcity.tool.maven3_2",
                "value": "/opt/TeamCity-9.1.3/TeamCity/buildAgent/tools/maven3_2"
            }, {
                "name": "vcsroot.TcPlugins_JetbrainsTeamcitySvn.externals-mode",
                "value": "externals-none"
            }, {
                "name": "vcsroot.TcPlugins_JetbrainsTeamcitySvn.labelingMessage",
                "value": "Labeled automatically by TeamCity"
            }, {
                "name": "vcsroot.TcPlugins_JetbrainsTeamcitySvn.labelingPatterns",
                "value": "trunk=>tags"
            }, {
                "name": "vcsroot.TcPlugins_JetbrainsTeamcitySvn.svn-config-directory",
                "value": "/home/netwolfuk/.subversion"
            }, {
                "name": "vcsroot.TcPlugins_JetbrainsTeamcitySvn.svn-use-default-config-directory",
                "value": "true"
            }, {
                "name": "vcsroot.TcPlugins_JetbrainsTeamcitySvn.url",
                "value": "http://svn.jetbrains.org/teamcity/plugins/rest-api/"
            }, {
                "name": "vcsroot.TcPlugins_JetbrainsTeamcitySvn.working-copy-format",
                "value": "1.8"
            }, {
                "name": "vcsroot.externals-mode",
                "value": "externals-none"
            }, {
                "name": "vcsroot.labelingMessage",
                "value": "Labeled automatically by TeamCity"
            }, {
                "name": "vcsroot.labelingPatterns",
                "value": "trunk=>tags"
            }, {
                "name": "vcsroot.svn-config-directory",
                "value": "/home/netwolfuk/.subversion"
            }, {
                "name": "vcsroot.svn-use-default-config-directory",
                "value": "true"
            }, {
                "name": "vcsroot.url",
                "value": "http://svn.jetbrains.org/teamcity/plugins/rest-api/"
            }, {
                "name": "vcsroot.working-copy-format",
                "value": "1.8"
            }, {
                "name": "webhook.body.failed",
                "value": "{ \"text\": \"oh no!, we failed\"}"
            }, {
                "name": "webhook.body.passed",
                "value": "{ \"text\": \"woot!, we passed\"}"
            }
        ],
        "changes": [
            {
                "version": "8196",
                "change": {
                    "files": [
                        "trunk-protocol-9.1/src/jetbrains/buildServer/server/rest/model/group/Group.java", "trunk-protocol-9.1/src/jetbrains/buildServer/server/rest/model/user/User.java"
                    ],
                    "comment": "Additional permissions checks on listing users and getting user's lastLogin attr" +
                        "ibute (TW-44842), integrate from 9.1.x",
                    "vcsRoot": "Jetbrains Teamcity SVN",
                    "username": "yegor.yarko"
                }
            }
        ]
    }
}

router.get('/', function (req, res, next) {
    res.json("OK");
});

module.exports = router;