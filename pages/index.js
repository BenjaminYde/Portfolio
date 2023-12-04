import Head from "next/head";
import stylesGlobal from "../styles/global.module.scss";
import stylesIndex from "../styles/index.module.scss";
import stylesThumbnail from "../styles/thumbnail.module.scss";
import Link from "next/link";

export default function Page() {
  return (
      <>
        <Head>
          <title>Home</title>
        </Head>

          {/* section - introduction */}
          <div>
              <div className={stylesGlobal.whitespaceMedium}></div>
              {/* about me */}
              <div className={`${stylesIndex.aboutMeContainer} ${stylesGlobal.wrapper}`}>
                  {/* description */}
                  <div className={stylesIndex.bodyLeft}>
                      <div className={stylesIndex.title1}>Well hello there</div>
                      <div className={stylesIndex.emptySpace}></div>
                      <div className={stylesIndex.title21}>I'm Benjamin Yde</div>
                      <div className={stylesIndex.title22}>And I'm a generalist game developer</div>
                      <div className={stylesIndex.emptySpace}></div>
                      <div className={stylesIndex.description}>
                          Keeping up-to-date and challenging myself with the latest tech is something I love to do.
                          In my free time I tend to I learn as much as possible from books and practice.
                          Sharing knowledge with people is something I thrive to do.
                          I graduated in the major Game Development at Digital Arts and Entertainment in Kortrijk in 2019.
                      </div>
                  </div>
                  {/* profile picture */}
                  <div className={stylesIndex.bodyRight}>
                      <img className={stylesIndex.profilePicture} src="./images/profile_picture.jpg"/>
                  </div>
              </div>
              <div className={stylesGlobal.whitespaceMedium}></div>
          </div>

          {/* section - skills */}
          <div className={`${stylesGlobal.backgroundWhite}`}>
              <div className={`${stylesGlobal.wrapper}`}>
                  {/* header */}
                  <div className={stylesGlobal.whitespaceMedium}></div>
                  <div className={stylesGlobal.HeaderOrange}>Technical Skills</div>
                  <div className={stylesGlobal.whitespaceRegular}></div>

                  <div className={stylesIndex.tagGrid}>
                      {/* tags */}
                      <div className={stylesIndex.tagCollection}>
                          <div className={stylesIndex.tagCollectionHeader}>Main Skills</div>
                          <div className={stylesIndex.tags}>
                              <ul>
                                  <li>C#</li>
                                  <li>SideFX Houdini</li>
                                  <li>Python</li>
                                  <li>Unity</li>
                                  <li>3D Optimalization</li>
                                  <li>DevOps</li>
                                  <li>Unit Testing</li>
                                  <li>CI/CD</li>
                                  <li>DOTS</li>
                                  <li>Gameplay Programming</li>
                                  <li>Unity Pixyz</li>
                                  <li>WPF</li>
                                  <li>UI/UX</li>
                                  <li>Level Design</li>
                              </ul>
                          </div>
                      </div>

                      {/* tags */}
                      <div className={stylesIndex.tagCollection}>
                          <div className={stylesIndex.tagCollectionHeader}>Tools Im Used To</div>
                          <div className={stylesIndex.tags}>
                              <ul>
                                  <li>Git</li>
                                  <li>Github</li>
                                  <li>Linux</li>
                                  <li>Docker</li>
                                  <li>Azure</li>
                                  <li>Jetbrains Rider</li>
                                  <li>Visual Studio Code</li>
                                  <li>Photoshop</li>
                                  <li>Azure Devops</li>
                                  <li>MS Office</li>
                                  <li>Monday.com</li>
                              </ul>
                          </div>
                      </div>

                      {/* tags */}
                      <div className={stylesIndex.tagCollection}>
                          <div className={stylesIndex.tagCollectionHeader}>Current Interests</div>
                          <div className={stylesIndex.tags}>
                              <ul>
                                  <li>C++</li>
                                  <li>Unreal Engine</li>
                                  <li>CMake</li>
                                  <li>Vulkan API</li>
                                  <li>Game Programming</li>
                                  <li>Shaders</li>
                              </ul>
                          </div>
                      </div>

                      {/* tags */}
                      <div className={stylesIndex.tagCollection}>
                          <div className={stylesIndex.tagCollectionHeader}>Minor Skills</div>
                          <div className={stylesIndex.tags}>
                              <ul>
                                  <li>Photogrammetry</li>
                                  <li>Blender</li>
                                  <li>HTML</li>
                                  <li>CSS</li>
                                  <li>Next JS</li>
                                  <li>React</li>
                                  <li>Substance Designer</li>
                                  <li>Substance Painter</li>
                              </ul>
                          </div>
                      </div>
                      {/* tags */}
{/*                      <div className={stylesIndex.tagCollection}>
                          <div className={stylesIndex.tagCollectionHeader}>Hobbies</div>
                          <div className={stylesIndex.tags}>
                              <ul>
                                  <li>DJ'ing</li>
                                  <li>Freestyle Ice Skating</li>
                                  <li>Organizing Cocktail Workshops</li>
                                  <li>3D Printing</li>
                              </ul>
                          </div>
                      </div>*/}

                  </div>

                  <div className={stylesGlobal.whitespaceRegular}></div>
              </div>
          </div>

          {/* section - projects */}
          <div className={`${stylesGlobal.wrapper}`}>

              {/* job experience */}

              {/* header */}
              <div className={stylesGlobal.whitespaceMedium}></div>
              <div className={stylesGlobal.HeaderOrange}>Experience</div>
              <div className={stylesGlobal.whitespaceRegular}></div>

              {/* grid */}
              <div className={stylesThumbnail.projectsGrid}>

              <div class={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/vintecc/SyntheticDataVinteccLogo.jpg"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Synthetic Data Engineer</div>
                      <div className={stylesThumbnail.badges}>
                          <span className={stylesThumbnail.highlightgreen}>Job</span>
                          <span className={stylesThumbnail.highlightorange}>Jan 2023 - Now</span>
                          <span>SideFX Houdini</span>
                          <span>Python</span>
                          <span>PDG</span>
                          <span>Karma XPU Rendering</span>
                          <span>Annotations</span>
                          <span>Simulation</span>
                          <span>Randomization</span>
                      </div>
                  </div>

                  <div class={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/vintecc/Dual-Thumbnail.png"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Simulation Engineer</div>
                      <div className={stylesThumbnail.badges}>
                          <span className={stylesThumbnail.highlightgreen}>Job</span>
                          <span className={stylesThumbnail.highlightorange}>Feb 2020 - Jan 2023</span>
                          <span>C#</span>
                          <span>Unity</span>
                          <span>WPF</span>
                          <span>Digital Twin</span>
                          <span>Machines</span>
                          <span>Co-Simulation</span>
                          <span>Physics</span>
                          <span>Sensors</span>
                          <span>System Simulations</span>
                      </div>
                  </div>

                  <div class={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/trifox/Thumbnail.jpg"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Trifox Game</div>
                      <div className={stylesThumbnail.badges}>
                          <span className={stylesThumbnail.highlightgreen}>Internship</span>
                          <span className={stylesThumbnail.highlightorange}>Feb 2019 - Jun 2019</span>
                          <span>Unity</span>
                          <span>Level Design</span>
                          <span>Gameplay</span>
                          <span>Prototyping</span>
                          <span>UX</span>
                      </div>
                  </div>

                  <div className={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/images/github-profile.jpg"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Github.com/benjaminyde</div>
                      <div className={stylesThumbnail.badges}>
                          <span className={stylesThumbnail.highlightgreen}>Personal</span>
                          <span>C#</span>
                          <span>C++</span>
                          <span>Python</span>
                          <span>Houdini</span>
                          <span>Guides</span>
                      </div>
                  </div>
              </div>

              {/* projects 3d art*/}

              {/* header */}
              <div className={stylesGlobal.whitespaceMedium}></div>
              <div className={stylesGlobal.HeaderOrange}>3D Art Projects</div>
              <div className={stylesGlobal.whitespaceRegular}></div>

              {/* grid */}
              <div className={stylesThumbnail.projectsGrid}>

                  <div className={stylesThumbnail.project}>
                      <Link href={"/"}
                          className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/steelmill-environment/Steelmill.gif"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Steelmill Environment</div>
                      <div className={stylesThumbnail.badges}>
                          <span>UE4</span>
                          <span>Level Design</span>
                          <span>Gameplay</span>
                          <span>Blueprint</span>
                          <span>Unreal Tournament</span>
                      </div>
                  </div>

                  <div className={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/procedural-house/Thumbnail.jpg"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Procedural House System</div>
                      <div className={stylesThumbnail.badges}>
                          <span>Houdini</span>
                      </div>
                  </div>

                  <div className={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/slums-evironment/Thumbnail.jpg"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Slums Environment</div>
                      <div className={stylesThumbnail.badges}>
                          <span>UE4</span>
                          <span>Level Design</span>
                      </div>
                  </div>

                  <div className={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/project-titan/Pipetool-thumbnail.jpg"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Procedural Pipes System</div>
                      <div className={stylesThumbnail.badges}>
                          <span>Houdini</span>
                          <span>UE5</span>
                      </div>
                  </div>

                  <div className={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/cudeman-hunting-knife/Thumbnail.jpg"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Cudeman Hunting Knife</div>
                      <div className={stylesThumbnail.badges}>
                          <span>3dsMax</span>
                          <span>Substance D & P</span>
                          <span>Photoshop</span>
                      </div>
                  </div>

                  <div className={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/procedural-scifi-floor/thumbnail.jpg"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Procedural Scifi Floor</div>
                      <div className={stylesThumbnail.badges}>
                          <span>Houdini</span>
                          <span>Substance Painter</span>
                      </div>
                  </div>

                  <div className={stylesThumbnail.project}>
                      <Link href={"/"}
                            className={stylesThumbnail.projectImageButtonContainer}>
                          <img src="/projects/procedural-jenga-tower/thumbnail.gif"
                               className={`${stylesThumbnail.projectImage}`}/>
                          <div className={stylesThumbnail.projectImageButton}>
                              <div className={stylesThumbnail.projectImageButtonText}>
                                  Read More
                              </div>
                          </div>
                      </Link>
                      <div className={stylesThumbnail.projectTitle}>Procedural Jenga Tower</div>
                      <div className={stylesThumbnail.badges}>
                          <span>Houdini</span>
                      </div>
                  </div>

              </div>

              <div className={stylesGlobal.whitespaceRegular}></div>
          </div>
      </>
  );
}