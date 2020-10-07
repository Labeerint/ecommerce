<template>
  <div id="app" class="app">
    <div class="container">
      <div id="nav" class="nav">
        <ul class="categories">
          <li class="categories__item">
            <router-link class="categories__link" to="/"><font-awesome-icon icon="home" /></router-link>
          </li>
          <li class="categories__item">
            <router-link class="categories__link" to="/cart"><font-awesome-icon icon="heart" /></router-link>
          </li>
          <li class="categories__item">
            <router-link class="categories__link" to="/wishlist"><font-awesome-icon icon="star" /></router-link>
          </li>
        </ul>
        <div class="bar"></div>
      </div>
      <div class="crumbs">
        <h2 class="crumbs__title">
          Card Actions
        </h2>
        <div class="crumbs__items"></div>
      </div>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>



<style lang="scss">
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app{
  background: #2B3253;
  color: #fff;
  padding-top: 20px;
  padding: 0 20px;
}

.content{
  margin: 0 auto;
}

  .nav{
    height: 62px;
    margin: 0 auto;
    background: #0F1642;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    padding-top: 10px;
    display: flex;

  }

  .categories{
    width: 185px;
    height: 20px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-left: 22px;



    &__item{
      color: white;
    }

    &__link{
      color: #ffffff;
      font-size: 30px;

    }
  }

  .bar{
    width: 40px;
    height: 40px;
    background: aqua;
    margin-left: auto;
    margin-right: 20px;
  }

  .crumbs{
    margin-top: 25px;
    display: flex;

    &__title{
      font-size: 24px;
    }
  }

  .view{
    margin-top: 25px;
  }
</style>
