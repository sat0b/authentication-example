require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `farebase example`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {      
      resolve: "gatsby-plugin-firebase",  
       options: {      
        features: {     
         auth: true,       
         database: false,  
         firestore: true,
         storage: false,    
         messaging: true, 
         functions: false,  
         performance: false, 
         analytics:true,    
        }, 
        credentials: {  
         apiKey:'FIREBASE_API_KEY', 
         authDomain:'API_DOMAIN',
         projectId: 'FIREBASE_PROJECT_ID',
       }   
      },
     },    
  ],
}
