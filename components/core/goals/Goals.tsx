import styles from './Goals.module.scss'
import styles2 from './Grid.module.scss'

/*
type Props = {
    color: string
}
*/

const Goals = () => {
  return (
    <div className={styles.container}>
    <div className={styles2.gallery}>
      <div className={styles.card}>
         <div className={styles.card__img}>
            <img
              alt="A Super Blood Moon Is Nicer Than It Sounds"
              src="https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x685_crop_center-center_82_line/458227/lunar-eclipse-blood-moon.jpg"
            />
          </div>
          <h4 className="jej">
            A Super Blood Moon Is Nicer Than It Sounds
          </h4>

      </div>

      <div className={styles.card}>
         <h1>esto es algo de grid</h1>
         <div className={styles.card__img}>
            <img
              alt="Solar Cruiser, NASA's Large Solar Sail Test"
              src="https://apod.nasa.gov/apod/image/1101/NanoSailD900.jpg"
            />
          </div>
      </div>

      <div className={styles.card}>
         <h1>esto es algo de grid</h1>
         <div className={styles.card__img}>
            <img
               alt="NEA Scout, NASA's Solar Sail Mission to an Asteroid"
               src="https://apod.nasa.gov/apod/image/2101/AsteroidStreak_hst_960.jpg"
            />
          </div>
      </div>

      <div className={styles.card}>
         <h1>esto es algo de grid</h1>
         <div className={styles.card__img}>
            <img
               alt="The companions of the planets"
               src="https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x1242_crop_center-center_82_line/io-transit-of-jupiter.jpg"
             />
          </div>
      </div>

      <div className={styles.card}>
         <h1>esto es algo de grid</h1>
         <div className={styles.card__img}>
            <img
               alt="Seeking Small Worlds"
               src="https://planetary.s3.amazonaws.com/web/assets/email/newsletter/_1200x675_crop_center-center_82_line/456145/last-look-at-bennu-high-contrast.jpg"
            />
          </div>
      </div>

    </div>
    </div>
  )
}

export default Goals
