export funtion Upload(files){
    var filedata = files;

    var data = new FormData();
    for (var i = 0; i < filedata.length; i++) {
        data.append(filedata[i].Name, filedata[i]);
    }

    // let formData = new FormData();
    // if (video) {
    //     formData.append("videoFile", {
    //         name: "name.mp4",
    //         uri: video.uri,
    //         type: 'video/mp4'
    //     });
    // }
    // if (image) {
    //     formData.append("image", image.base64);
    // }
    
    fetch(base_url + 'newFeed.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: data
    })
        .then(response => {
            return response.json();
        })
        .then(async (res) => {
         
            console.log(res)
         
        })
        .catch(error => {
            console.log(error);
           
        });
}