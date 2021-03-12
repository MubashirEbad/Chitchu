import axios from 'axios';

export const GET_CURRENT_LOCATION = (text) => {
    const queryString = `https://maps.googleapis.com/maps/api/place/js/AutocompletionService.GetPredictions?1s${text}&4sen-GB&15e3&20sE17EE510-4399-43DF-8E3B-7AB27B8EBE92nf5zgtvl0z9p&21m1&2e1&callback=_xdc_._m6yybo&key=AIzaSyAgp_YFhuJg0LqMJT03VG2lFCEP-yb0P3M&token=1062131`;
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: queryString,
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                console.log(res);
                resolve(res.data)
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
}