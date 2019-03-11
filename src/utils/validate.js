const validate =  {
    vlan: (vlan) => {
        const value = parseInt(vlan);
        if (value > 0 && value < 4095 && vlan === value.toString()) {
            return true;
        }
        return false;
    },

    ip: (ip) => {
       const regIpv4 = /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
        if (regIpv4.test(ip)) {
            return true;
        }
        return false;
    },

    shape: (shape) => {
        const regPattern = /^\d{1,3}[a-zA-Zа-яА-Я]{1,4}@(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
        const regPattern2 = /^\d{1,3}[a-zA-Zа-яА-Я]{1,4}@$/;
        if (regPattern.test(shape) || regPattern2.test(shape)) {
            return true;
        }
        return false;
    }

};
export default validate;