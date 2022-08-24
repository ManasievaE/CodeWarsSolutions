
John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.

Unfortunately everything is mixed, things are not always in the same order; parts of lines are cluttered with non-alpha-numeric characters (except inside phone number and name).

Examples of John's phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a phone number num returns a string for this number : "Phone => num, Name => name, Address => adress"

Examples:
s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
It can happen that there are many people for a phone number num, then return : "Error => Too many people: num"

or it can happen that the number num is not in the phone book, in that case return: "Error => Not found: num"

Notes
Codewars stdout doesn't print part of a string when between < and >

You can see other examples in the test cases.

JavaScript random tests completed by @matt c.

function phone(strng, num) {
    const arr = strng.split(/\n/g);

 return arr.reduce((acc,curr,v,arr) => {
   const exactPhoneRegEx = new RegExp(`${num}`, 'g');
   const phoneRegEx = new RegExp(/.?\d?.?\d{2,3}.?\d{3}.?\d{4}/, 'g');
   const nameRegEx = new RegExp(/\<\s?\D+\s?\D{0,}\s?\>/, 'g');
   let retString = '';
   let phoneArr = [];
   let nameArr = [];
   let addrArr = [];

   for(let i = 0; i < arr.length; i++) {
     let item = arr[i];
     if (item.match(nameRegEx) && item.match(exactPhoneRegEx)) {
       nameArr.push(item.match(nameRegEx)[0].replace(/\<\s?(\D\s?\D{0,})\s?\>/g, '$1').trim())
       phoneArr.push(item.match(exactPhoneRegEx)[0])
       item = item.replace(phoneRegEx, '');
       item = item.replace(nameRegEx, '');
       addrArr.push(item.replace(/[/$!?*;:,+]+/g, '').trim());
     };
   }

   if (!phoneArr.find(p => phoneRegEx.test(p))) return `Error => Not found: ${num}`;
   if (phoneArr.length > 1) return `Error => Too many people: ${num}`;

   retString += `Phone => ${phoneArr[0]}, `;
   retString += `Name => ${nameArr[0]}, `;
   retString += `Address => ${addrArr[0]}`.replace(/\_/g, ' ').replace(/\s{2,}/g, ' ');

   return retString;
 });
}