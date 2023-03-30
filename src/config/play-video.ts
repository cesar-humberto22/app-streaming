import { exec } from 'child_process';

const listFiles = [
    "1.mp4",
    "2.mp4",
    "3.mp4",
    "4.mp4",
    "5.mp4"
];
let countFile1 = 0;
let countFile2 = 3;

function count(count: number){
    let aux = count + 1;
    if(aux >= listFiles.length)
        return 0
    return aux
}

function payVideos1() {
    //console.log({countFile1})
    const path = "D:\\xampp\\htdocs\\app-streaming\\src\\public\\videos\\";
    const fileName = listFiles[countFile1];
    exec(`ffmpeg -re -i ${path}${fileName} -c copy -f flv rtmp://192.168.0.185/live/stream/GEVq7cbyf`, (error, stdout, stderr) => {
        if (error) {
            //console.error(`Error al reproducir el video: ${error}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        //console.error(`stderr: ${stderr}`);
        payVideos1()
    });

    countFile1 = count(countFile1);
}

function payVideos2() {
    //console.log({countFile2})
    const path = "D:\\xampp\\htdocs\\app-streaming\\src\\public\\videos\\";
    const fileName = listFiles[countFile2];
    exec(`ffmpeg -re -i ${path}${fileName} -c copy -f flv rtmp://192.168.0.185/live/stream/679oXfJ6x`, (error, stdout, stderr) => {
        if (error) {
            //console.error(`Error al reproducir el video: ${error}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);
        //console.error(`stderr: ${stderr}`);
        payVideos2()
    });
    countFile2 = count(countFile2);
}

export default () => {
    payVideos1()
    payVideos2()
};
