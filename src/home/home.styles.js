export const HomeStyle = {
  content:{
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#000',
    backgroundImage: 'url(/assets/images/bg-main-min.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  headerImage:{
    marginTop:90,
    paddingTop:50,
    paddingBottom:50,
    '@media (max-width: 450px) ':{
      marginTop:90,
    }
  },
  headerLogo:{
    display:'block',
    width:350,
    margin:'0 auto',
    '@media (max-width: 450px) ':{
      width:250,
    }
  },
  headerTitle:{
    color:'#fff',
    margin: '0 auto',
    textAlign:'center',
    width:500,
    fontSize: 30,
    fontWeight:500,
    '@media (max-width: 450px) ':{
      width:'100%',
    },
  },
  headerDate:{
    color:'#ed9005',
    margin: '20px auto',
    textAlign:'center',
    width:500,
    fontSize: 40,
    fontWeight:'bolder',
    '@media (max-width: 450px) ':{
      width:'100%',
    },
  },
  headerMonth:{
    color:'#fff',
    margin: '0 auto',
    textAlign:'center',
    width:500,
    fontSize: 35,
    fontWeight:500,
    '@media (max-width: 450px) ':{
      width:'100%',
    },
  },
};