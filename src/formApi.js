class FormApi {
    serverUrl = 'http://192.168.0.103:3000/';

    request = async (data, cb) => {
        try {
            const res = await fetch(this.serverUrl, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: data
            });
            const response = await res.text();
            await cb('serverResponse', response);
        }catch (e) {
            console.log(e);
        }
    }
}

const apiHelper = new FormApi();
export default apiHelper;