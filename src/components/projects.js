import React from 'react';
import projects from '../data/projects.json';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      limit: 2,
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return { limit: prev.limit + 2 };
    });
  }

  render() {
    return (
      <div id='projects' className='md:pt-88'>
        <h2 className='top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only'>
          Projects
        </h2>
        <div className='-my-8 group pt-32 pb-40 md:py-0'>
          {projects.slice(0, this.state.limit).map((project, index) => {
            return (
              <article
                className='transition md:group-hover:opacity-50 md:hover:opacity-important rounded bg-white my-8 fadeIn'
                key={`project_item_${index}`}>
                <div className='p-40'>
                  <div className='flex icon-container'>
                    {project.tool_icons.map((icon, idx) => {
                      return (
                        <img
                          src={icon.icon}
                          key={`icon_item_${idx}`}
                          className='w-16 h-16 mr-16 mb-2'
                        />
                      );
                    })}
                  </div>
                  <div className='block'>
                    <h3 className='mt-8 text-lg font-semibold leading-tight card-item-text'>
                      {project.name}
                    </h3>
                    <p className='mt-8 card-item-text'>{project.description}</p>
                    <a
                      href={project.repo_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='highlight-link mt-24 mr-16 inline'>
                      Github
                    </a>
                    {project.site_url ? (
                      <a
                        href={project.site_url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='highlight-link mt-24 inline'>
                        Live
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
          {this.state.limit <= projects.length ? (
            <article
              className='transition md:group-hover:opacity-50 md:hover:opacity-important rounded bg-white my-8 load-more-item'
              onClick={this.loadMore}>
              <a className='block px-40 py-24'>
                <p className='text-xs my-10 font-bold tracking-widest uppercase'>
                  Load More
                </p>
              </a>
            </article>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Projects;
