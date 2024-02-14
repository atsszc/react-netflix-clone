import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "film" ? "Filmler" : "Diziler"}</span>
          <select name="genre" id="genre">
            <option>Tür</option>
            <option value="adventure">Macera</option>
            <option value="comedy">Komedi</option>
            <option value="crime">Suç</option>
            <option value="fantasy">Fantastik</option>
            <option value="historical">Tarih</option>
            <option value="horror">Korku</option>
            <option value="romance">Romantik</option>
            <option value="sci-fi">Bilim Kurgu</option>
            <option value="thriller">Gerilim</option>
            <option value="western">Batılı</option>
            <option value="animation">Animasyon</option>
            <option value="drama">Drama</option>
            <option value="documentary">Belgesel</option>
          </select>
        </div>
      )}
      <img
        src="https://images.hdqwalls.com/wallpapers/matrix-trilogy-ky.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Matrix programının tasarımcısı olan Mimar (Architect) ilk sürümlerde
          insan için tamamen kusursuz bir dünya kurar. Bu mükemmel dünyaya
          inanmayan insanlar simülasyondan uyanmaya kalkışır. Tam tersi bir
          dünyada ise insanlar simülasyonun içinde ölmektedir.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Oynat</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Bilgi</span>
          </button>
        </div>
      </div>
    </div>
  );
}
