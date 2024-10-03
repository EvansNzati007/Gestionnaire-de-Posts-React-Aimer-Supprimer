export default function Post({data, liker, deletePost}) {
    return (
      <div className={data.liker ? 'post active' : 'post'}>
        <div>
          <h2>{data.titre}</h2>
          <p>{data.description}</p>
        </div>
        <div className="btn">
          <button className='liker' onClick={() => liker(data)}>
            {data.liker ? 'Déjà Liker' : 'Liker'}
          </button>
          <button className='delete' onClick={() => deletePost(data.id)}>
            Effacer
          </button>
        </div>
      </div>
    );
  }
  