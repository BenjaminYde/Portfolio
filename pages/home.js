import Head from "next/head";
import stylesGlobal from "../styles/global.module.scss";
import stylesIndex from "../styles/index.module.scss";

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
              <div className={stylesGlobal.whitespaceRegular}></div>
          </div>

          {/* section - skills */}
          <div className={`${stylesGlobal.backgroundWhite}`}>
              <div className={`${stylesGlobal.wrapper}`}>
                  {/* header */}
                  <div className={stylesGlobal.whitespaceMedium}></div>
                  <div className={stylesGlobal.HeaderOrange}>Technical Skills</div>
                  <div className={stylesGlobal.whitespaceSmall}></div>
                  {/* tags */}
                  <div className={stylesIndex.tagCollection}>
                      <div className={stylesIndex.tagCollectionHeader}>Main Skills</div>
                      <div className={stylesIndex.tags}>
                          <ul>
                              <li>C#</li>
                              <li>Procedural 3D - Houdini</li>
                              <li>Unity</li>
                              <li>Gameplay Programming</li>
                              <li>DOTS</li>
                              <li>UI / UX</li>
                              <li>WPF</li>
                              <li>Unit Testing</li>
                              <li>CI / CD</li>
                              <li>Python</li>
                              <li>Release Management</li>
                              <li>3D Optimalization</li>
                              <li>Unity Pixyz</li>
                              <li>Level Design</li>
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
                          </ul>
                      </div>
                  </div>
                  {/* tags */}
                  <div className={stylesIndex.tagCollection}>
                      <div className={stylesIndex.tagCollectionHeader}>Tools Im Used To</div>
                      <div className={stylesIndex.tags}>
                          <ul>
                              <li>Git</li>
                              <li>Tortoise Git</li>
                              <li>Fork</li>
                              <li>Github</li>
                              <li>Azure Devops</li>
                              <li>Monday.com</li>
                              <li>Photoshop</li>
                              <li>MS Office</li>
                              <li>Visual Studio</li>
                              <li>Jetbrains Rider</li>
                              <li>Jetbrains CLion</li>
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
                  <div className={stylesIndex.tagCollection}>
                      <div className={stylesIndex.tagCollectionHeader}>Hobbies</div>
                      <div className={stylesIndex.tags}>
                          <ul>
                              <li>DJ</li>
                              <li>Freestyle Ice Skating</li>
                              <li>Organizing Cocktail Workshops</li>
                          </ul>
                      </div>
                  </div>
                  <div className={stylesGlobal.whitespaceRegular}></div>
              </div>
          </div>
      </>
  );
}