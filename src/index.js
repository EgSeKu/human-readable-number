module.exports = function toReadable(num) {
    let res = '';
    let resArray = [];
    let numer = num.toString().split('').reverse().join('');
    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let specialDecades = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decades = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (numer.length == 1)
        return nums[num];
    for (i = 0; i < numer.length; i++) {
        if (i == 0 && numer[1] == 1) {
            resArray.push(specialDecades[numer[i]]);
            i++;
        }
        else if (i == 1) {
            if (numer[i] >1)
                resArray.push(decades[numer[i]]);
        }
        else {
            if (i == 2)
                resArray.push('hundred');
            if (numer[i] != 0)
                resArray.push(nums[numer[i]]);
        }
    }
    for (i = resArray.length - 1; i >= 0; i--)
        res += (resArray[i] + ' ');
    res = res.slice(0, -1);
    return res;
}