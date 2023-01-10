

function ListingCard({ profile_picture,title, rating, username, location, crop_type, plot_size, description }) {
  return (
    <div>
      <img src={profile_picture} alt="profile"/>
      <h1>Title: {title}</h1>
      <h3>Username: {username}</h3>
      <p>User Rating: {rating}</p>
      <p>Location:{location}</p>
      <p>Crop:{crop_type}</p>
      <p>Plot Size:{plot_size}</p>
      <h1>Description: {description}</h1>
    </div>
  );
}

export default ListingCard;


  //key data for cards = username, location, croptype, plotsize, description, user image, rating