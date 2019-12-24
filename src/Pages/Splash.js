import React, { useEffect, Fragment } from 'react';
import './Splash.css';
import { loadImages } from '../redux/actions';

const Splash = props => {
  const { image: { images, isLoading, error }, stat, dispatch } = props;
  useEffect(() => {
      dispatch(loadImages());
  },[dispatch]);
  return (
    <div>
      <header>What the Splash!</header>
      <div className="content">
            <section className="grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <Stats stat={stat[image.id] || null} />
                        <img
                            src={image.urls.small}
                            alt={image.user.username}
                        />
                    </div>
                ))}
            </section>
            <button className="btn" 
                    onClick={() => { !isLoading && dispatch(loadImages()) }}
                    disabled={isLoading}
                >
                {isLoading ? 'Loading...' : 'Load Images'}
            </button>
            {error && <p className="err">Something went wrong...</p>}
        </div>
    </div>
  );
};

const Stats = props => {
    const { stat } = props;
    return (
        <Fragment>
            {stat ? 
                <Fragment>
                    {stat.error ? <span className="stats">🤯 Error!</span> : ''}
                    {stat.isLoading ? <span className="stats">🙄 Loading...</span> : ''}
                    {stat.downloads ? <span className="stats">🤘 {stat.downloads}</span> : ''}
                </Fragment> : ''
            }
        </Fragment>
    );
};

export default Splash;
