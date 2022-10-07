
export default function handler(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bot MTAyNzQ5MTk2NzYwNjcyMjU5MQ.GWbxtJ.qzjftXxrub8UeMzWLg5XJp8KRk1G89YRGPMX-8");
  myHeaders.append("Cookie", "__dcfduid=ff19bcca457611edb6f566e4cd123cf2; __sdcfduid=ff19bcca457611edb6f566e4cd123cf27195b43c64e57f842df4a2afa8d0b8a17afc8816d33b612a6372eeaf3cfdd7de");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://discordapp.com/api/channels/1002226708474232963/messages", requestOptions)
    .then(response => response.json())
    .then(result => res.status(200).send(result))
    .catch(error => console.log('error', error));
}