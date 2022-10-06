import styles from '../styles/components/news.module.sass'

export default function News() {


  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bot MTAyNzQ5MTk2NzYwNjcyMjU5MQ.GWbxtJ.qzjftXxrub8UeMzWLg5XJp8KRk1G89YRGPMX-8");
  myHeaders.append("Cookie", "__dcfduid=ff19bcca457611edb6f566e4cd123cf2; __sdcfduid=ff19bcca457611edb6f566e4cd123cf27195b43c64e57f842df4a2afa8d0b8a17afc8816d33b612a6372eeaf3cfdd7de");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const callAPI = async () => {
    try {
      const res = await fetch(`https://discordapp.com/api/channels/937484414928162866/messages`, requestOptions);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <button onClick={callAPI}>Make API call</button>
    </>
  )
}