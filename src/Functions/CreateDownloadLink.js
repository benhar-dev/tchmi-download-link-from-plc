// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.748.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var tchmi_download_link_from_plc;
        (function (tchmi_download_link_from_plc) {
            function CreateDownloadLink(TargetHtmlHost, FileRelativePath) {

                var html = '<a href=\"' + FileRelativePath + '\" download=\"\">My Download Link </a>';

                TargetHtmlHost.setContent(html);

            }
            tchmi_download_link_from_plc.CreateDownloadLink = CreateDownloadLink;
        })(tchmi_download_link_from_plc = Functions.tchmi_download_link_from_plc || (Functions.tchmi_download_link_from_plc = {}));
        Functions.registerFunctionEx('CreateDownloadLink', 'TcHmi.Functions.tchmi_download_link_from_plc', tchmi_download_link_from_plc.CreateDownloadLink);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);