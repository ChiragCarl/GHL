// controllers/dataController.js
const db = require('../../connection/db');
const axios = require('axios');

exports.getAllContact = async (req, res) => {
    try {
        
        // Replace with your GoHighLevel API key
        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Im56bEZXZ0VHQUkxWWpZRWY1VkdHIiwiY29tcGFueV9pZCI6Ing1czRXWXBLdXdjeXpNaENCM3A2IiwidmVyc2lvbiI6MSwiaWF0IjoxNjk2Nzg2MzM2NTY4LCJzdWIiOiJ1c2VyX2lkIn0.cfNtZKMY7ZaoLjMGckQenYFKFHqqUWBJYQhoio6CcZg';

        const ghlUrl = 'https://rest.gohighlevel.com/v1/contacts';

        const response = await axios.get(ghlUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
        });

        const contacts = response.data;
      //  console.log(contacts.contacts[0].id);
      await db.query("delete from facebookleads");
        contacts.contacts.forEach(async(contact, index) => {
            const query = `INSERT INTO facebookleads (contactId,firstName, lastName, email, Phone, contactSource,contactType) VALUES (?,?,?,?,?,?,?)`;
            await db.query(query, [contact.id,contact.firstName,contact.lastName,contact.email,contact.phone,contact.type,contact.source]);
          });
        res.json(contacts); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.listAllContact = async (req, res) => {
    try {
     const [response]= await db.query("select * from facebookleads");
     console.log(response);
     res.status(200).json(response); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};
