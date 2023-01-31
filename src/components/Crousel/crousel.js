import React from 'react'

const crousel = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://uae.bumrungrad.com/Bumrungrad.Dubai/media/ConditionAndTreatmentIcons/ATMOSPHERE-AT-MAIN-BUILDING_003_re.jpg" style={{ height: '500px' }} class="d-block w-100" alt="Bumrungrad Thailand" />
                </div>
                <div class="carousel-item">
                    <img src="https://mediglobus.com/wp-content/uploads/2018/05/Bumrungrad-International-Hospital3-e1526286058737.jpg" style={{ height: '500px' }} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.fazwaz.com/nw/og2nfLXBQFJeJnwNEilQa4iZX2U/520x350/sub-place/377/bumrungrad.jpg" style={{ height: '500px' }} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>
    )
}

export default crousel