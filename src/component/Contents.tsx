import Content from './Content';
import posterOne from '../assets/1.jpeg';
import posterTwo from '../assets/2.jpeg';
import posterThr from '../assets/3.jpeg';
import posterFour from '../assets/4.jpeg';
import posterFive from '../assets/5.jpeg';
import posterSix from '../assets/6.jpeg';
import posterSev from '../assets/7.jpeg';

function Contents() {
  let posterContents = [
    posterOne,
    posterTwo,
    posterThr,
    posterFour,
    posterFive,
    posterSix,
    posterSev,
  ];

  return (
    <div>
      {posterContents.map((content) => (
        <Content content={content} />
      ))}
    </div>
  );
}

export default Contents;
