import * as S from './VideoComponent.styles'

const VideoComponent: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
    return (
      <S.VideoContainer>
        <S.VideoPlayer autoPlay loop>
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </S.VideoPlayer>
      </S.VideoContainer>
    );
  };
  
  export default VideoComponent;