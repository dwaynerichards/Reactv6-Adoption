import ImageList from "@mui/material/ImageList";

import ImageListItem from "@mui/material/ImageListItem";

//stardard materail ui imagelist
const Images = (props) => {
  const { arr } = props;
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {arr.map((item, index) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=161&fit=crop&auto=format`}
            srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={(props.name, index)}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Images;
