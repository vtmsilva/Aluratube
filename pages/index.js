import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
    const estiloDaHomePage = {
        // backgroundColor: "red", marginTop: "50px"
    };
    return (
    
    <>
    <CSSReset />
    <div style={estiloDaHomePage}>
        <Menu />
        <Header />    
        <TimeLine playlists={config.playlists}>
            Conteúdo
        </TimeLine>
    </div>
    </>
    
    );
  }
  
  export default HomePage

//   function Menu() {
//     return (  
//         <div>
//             Menu
//         </div>
        

//     )
//   }

  function TimeLine(propriedades) {
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
        return (  
            <StyledTimeline >
                {playlistNames.map(function(playlistName){
                    const videos = propriedades.playlists[playlistName];
                    return ( 
                        <section>
                            <h2>{playlistName}</h2>
                            <div>
                              {videos.map((video) => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>
                        </section> 
                    )
                })}
            </StyledTimeline>

        )
    }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
  function Header() {
    return (  
        <StyledHeader>
            <section className='user-info'>
                {/* <img src="banner" /> */}
                <img src={`https://github.com/${config.github}.png`} />  
                <div>
                <h2>{config.name}</h2>
                <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>

    )
  }