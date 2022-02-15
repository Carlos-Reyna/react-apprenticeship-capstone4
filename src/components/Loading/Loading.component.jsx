const path = require('../../media/spinning-loading.gif');

function Loading() {
  return (
    <div>
      <img src={path.default} alt="media-gif" />
    </div>
  );
}

export default Loading;
