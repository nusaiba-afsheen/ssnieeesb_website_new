/* formatting used :
        varaible naming : lowerCamelCase
        function naming : UpperCamelCase
        file/folder naming : lowerCamelCase, preferred only small
*/

import { NodeNextRequest } from "next/dist/server/base-http/node";
import Head from "next/head";
import Image from "next/image";
import Member from "../team/member";
export default function IEEE({ url, name }) {
  var members = [
    {
      name: "T Sharmila",
      image: "/assets/team/IEEE/faculty0.jpg",
      post: "Faculty Incharge",
      contact: {
        email: { has: true, url: "mailto:sreesharmilat@ssn.edu.in" },
        linkedin: {
          has: true,
          url: "https://www.linkedin.com/in/sree-sharmila-443710a0/?originalSubdomain=in",
        },
        github: {
          has: false,
          url: null,
        },
        instagram: {
          has: false,
          url: null,
        },
        onclick: {
          has: true,
          url: "https://www.ssn.edu.in/staff-members/dr-t-sree-sharmila/",
        },
      },
    },
  ];
  return (
    <div className="bg-[#f8fafc] bg-opacity-20  items-center p-1 m-3 rounded-xl">
      <div className="text-center text-3xl text-red-500 font-bold font-mono">
        Faculty Members
      </div>
      <div className="rounded-md flex justify-center ">
        <Member className="m-1" member={members[0]}></Member>
      </div>
    </div>
  );
}
