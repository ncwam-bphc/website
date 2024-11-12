import SimpleGallery from '~/components/gallery'
const GalleryPage = () => {
    const images = [
      {
        largeURL:
          '/gallery/a.JPG',
        thumbnailURL:
          '/gallery/a.JPG',
        width: 4016,
        height: 6016,
      },
      {
        largeURL:
          '/gallery/b.JPG',
        thumbnailURL:
          '/gallery/b.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/c.JPG',
        thumbnailURL:
          '/gallery/c.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/d.JPG',
        thumbnailURL:
          '/gallery/d.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/e.JPG',
        thumbnailURL:
          '/gallery/e.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/f.JPG',
        thumbnailURL:
          '/gallery/f.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/g.JPG',
        thumbnailURL:
          '/gallery/g.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/h.JPG',
        thumbnailURL:
          '/gallery/h.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/i.JPG',
        thumbnailURL:
          '/gallery/i.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/j.JPG',
        thumbnailURL:
          '/gallery/j.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/k.JPG',
        thumbnailURL:
          '/gallery/k.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/l.JPG',
        thumbnailURL:
          '/gallery/l.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/m.JPG',
        thumbnailURL:
          '/gallery/m.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/n.JPG',
        thumbnailURL:
          '/gallery/n.JPG',
        width: 5184,
        height: 3456,
      },
      {
        largeURL:
          '/gallery/o.JPG',
        thumbnailURL:
          '/gallery/o.JPG',
        width: 5184,
        height: 3456,
      },
    ];
  
    return (
      <div>
        <br></br>
        <br></br>
        <br />
        <br></br>
        <br/>
        <SimpleGallery galleryID="my-test-gallery" images={images} />
        <br />
        <br />
      </div>
    );
  };
  
  export default GalleryPage;