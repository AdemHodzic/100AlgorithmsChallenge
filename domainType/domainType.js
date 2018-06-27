function domainType(domains) {
    var arr = [];
    var extensions = [];
    domains.forEach(function (e) { return extensions.push(e.split('.').reverse()[0]); });
    extensions.forEach(function (e) {
        switch (e) {
            case 'org':
                arr.push('organization');
                break;
            case 'com':
                arr.push('commercial');
                break;
            case 'net':
                arr.push('network');
                break;
            case 'info':
                arr.push('information');
                break;
            default:
                break;
        }
    });
    return arr;
}
console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));
