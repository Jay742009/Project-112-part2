console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelloaded);

function modelloaded() {
    console.log('modelloaded');
}

function checking_1() {
    image_1 = document.getElementById("img_1");
    classifier.classify(image_1, gotresult_1);
}

function checking_2() {
    image_2 = document.getElementById("img_2");
    classifier.classify(image_2, gotresult_2);
}

function checking_3() {
    image_3 = document.getElementById("img_3");
    classifier.classify(image_3, gotresult_3);
}

function checking_4() {
    image_4 = document.getElementById("img_4");
    classifier.classify(image_4, gotresult_4);
}

function gotresult_1(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sp_1").innerHTML = results[0].label;
        document.getElementById("heading_1").innerHTML = "Mobilenet is more accurate than Microsoft azure";
    }
}

function gotresult_2(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sp_2").innerHTML = results[0].label;
        document.getElementById("heading_2").innerHTML = "Mobilenet is more accurate than Microsoft azure";
    }
}

function gotresult_3(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sp_3").innerHTML = results[0].label;
        document.getElementById("heading_3").innerHTML = "Microsoft azure is more accurate than Mobilenet";
    }
}

function gotresult_4(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sp_4").innerHTML = results[0].label;
        document.getElementById("heading_4").innerHTML = "Microsoft azure is more accurate than Mobilenet";
    }
}