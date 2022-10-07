// components/Discord.js

import axios from "axios";
import useSWR from "swr";

export default function Users() {

  var config = {
    method: 'get',
    url: 'https://discordapp.com/api/channels/937484414928162866/messages',
    headers: { 
      'Authorization': 'Bot MTAyNzQ5MTk2NzYwNjcyMjU5MQ.GWbxtJ.qzjftXxrub8UeMzWLg5XJp8KRk1G89YRGPMX-8', 
      'Cookie': '__dcfduid=ff19bcca457611edb6f566e4cd123cf2; __sdcfduid=ff19bcca457611edb6f566e4cd123cf27195b43c64e57f842df4a2afa8d0b8a17afc8816d33b612a6372eeaf3cfdd7de'
    }
  }

  const address = `https://discordapp.com/api/channels/937484414928162866/messages`;
  const fetcher = async (url) => await axios(config).get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
    <div>
      <div className="container">
        {data &&
          data.results.map((item) => (
            <div key={item.cell} className={`user-card  ${item.gender}`}>
              <div>
                <h3>{`${item.name.first}  ${item.name.last}`}</h3>
              </div>
              <div className="details">
                <p>Country: {item.location.country}</p>
                <p>State: {item.location.state}</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>Age: {item.dob.age}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}