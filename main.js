function sub() {
    if (arguments.length == 0) {
        return 1
        return this.field("link")[0]
    }
    else if (arguments.length == 1) {
        return 2
        return this.field("link").find(x => x.field("name") == arguments[0])
    }
    else if (arguments.length == 2) {
        return 3
        return arguments[0].field("link").find(x => x.field("name") == arguments[1])
    }
}
