function checkObj(obj) {
    if (typeof(obj) == "undefined" || obj == null || (typeof(obj) != "object" && (obj + "").replace(/ /g, "") == "")) {//||obj.length==0
        return true;
    }
    return false;
}