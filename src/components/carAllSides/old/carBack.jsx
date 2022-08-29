import React from 'react'
import SmallButton from '../../smallButton/smallButton'
import './carAllSides.scss'


function CarBack(props) {
  return (
    <div className='carSides'>
      <div className='carSides__addbuttons'>
          <SmallButton selectedPart="rBumper" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="trunk" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="lRearlight" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="rRearlight" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="rearGlass" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="bFoglight" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
        </div>
        
        <div className='carBack__image'>
            <svg width="97" height="68" viewBox="0 0 97 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.72266 67.2598C9.5054 67.2494 9.28815 67.2258 9.07089 67.2258C6.86692 67.2206 5.76493 66.1404 5.76493 63.9853C5.76493 55.2191 5.78327 46.4504 5.744 37.6842C5.73877 36.3964 5.2231 35.0797 5.36968 33.8285C5.59217 31.9308 6.13924 30.0671 6.64442 28.2139C6.88786 27.3187 7.34854 26.4837 7.8197 25.3608C5.65499 25.3608 3.75466 25.3765 1.85432 25.3556C0.186942 25.3372 -0.163803 24.9996 0.0613063 23.3243C0.323061 21.3795 1.34652 19.9084 3.29659 19.3378C4.49019 18.9871 5.73614 18.7384 6.97424 18.6416C8.49765 18.5238 9.05256 19.2357 9.67815 21.725C10.5943 21.3612 11.3534 21.0314 11.7408 19.9163C13.3427 15.299 14.9918 10.6947 16.7927 6.15062C17.3188 4.82353 18.3213 3.6561 19.2479 2.53317C19.6196 2.08034 20.3499 1.77933 20.9598 1.69033C24.0433 1.24797 27.1346 0.630214 30.2311 0.567393C40.7746 0.352754 51.3233 0.198326 61.8668 0.329203C66.6124 0.386789 71.3606 1.08044 76.0801 1.70341C77.0459 1.83167 78.2029 2.73996 78.7159 3.61684C80.132 6.03022 81.4068 8.55092 82.4485 11.1475C83.6238 14.0766 84.4326 17.1548 85.5268 20.1205C85.7912 20.8377 86.5503 21.3769 87.2753 22.2224C87.5004 21.4109 87.6915 20.9843 87.7229 20.5445C87.8119 19.3221 88.5605 18.8091 89.6494 18.6363C92.2277 18.228 95.429 19.6519 96.6357 21.9606C97.0283 22.7145 97.1068 23.8348 96.8555 24.641C96.7273 25.0519 95.5651 25.3006 94.8531 25.3399C93.0732 25.4367 91.2854 25.3713 89.3118 25.3713C89.7306 26.4157 90.0551 27.3475 90.4687 28.2401C91.2644 29.9572 91.699 31.7057 91.6859 33.6349C91.6126 43.7778 91.6257 53.9208 91.5969 64.0664C91.5969 64.624 91.5236 65.1946 91.3979 65.7391C91.1624 66.7625 90.487 67.2598 89.4269 67.2546C87.9009 67.2468 86.3749 67.2599 84.8488 67.2651C83.7154 67.2572 82.5821 67.2337 81.4487 67.2441C79.4227 67.2651 79.0929 66.9536 79.0876 64.9224C79.0824 62.9304 79.0876 60.9411 79.0876 58.8366H77.4831C58.3331 58.8366 39.1805 58.8366 20.0306 58.8366C19.7688 58.8366 19.5044 58.8575 19.2453 58.8366C18.4993 58.7685 18.2532 59.1167 18.2663 59.8365C18.2977 61.5379 18.3056 63.2393 18.2663 64.9407C18.2297 66.4536 17.3633 67.2468 15.8765 67.2468C13.827 67.2468 11.7774 67.2598 9.7279 67.2677L9.72266 67.2598ZM79.7629 15.7832L80.0483 16.0502C80.0064 15.9167 79.9645 15.7832 79.9226 15.6497C79.1243 13.6551 78.3233 11.6606 77.415 9.39115C76.3601 12.4668 77.5249 14.0478 79.7603 15.7832H79.7629ZM17.3162 15.956C19.4181 14.3566 20.8368 12.4668 19.6955 9.50632C18.8998 11.6553 18.104 13.8017 17.3109 15.9507C17.2743 16.0057 17.235 16.0633 17.1984 16.1182C17.2377 16.0633 17.2769 16.0109 17.3162 15.956ZM84.04 19.6441C84.095 19.6807 84.1526 19.7174 84.2076 19.7514C84.1788 19.6886 84.1473 19.6257 84.1185 19.5655C84.0871 19.3064 84.1055 19.0316 84.0191 18.7908C82.7103 15.1602 81.4251 11.5192 80.0457 7.91485C79.5954 6.73957 78.8939 5.66114 78.1636 4.26599C77.5249 6.27626 77.2475 7.80491 78.1558 9.50632C79.3153 11.6841 80.2603 13.9954 81.1084 16.3198C81.6738 17.8694 82.7025 18.8562 84.04 19.6441V19.6441ZM84.0583 21.1832L84.0688 21.1937C81.8858 19.1415 79.7001 17.0946 77.525 15.0346C76.3366 13.909 75.8236 12.4877 76.0172 10.891C76.2738 8.78125 76.5434 6.65842 77.0302 4.59318C77.326 3.33676 77.059 2.80017 75.7241 2.67715C75.6089 3.05408 75.5016 3.42053 75.3838 3.78437C74.6064 6.22654 73.8892 8.69226 73.028 11.1056C72.371 12.9458 71.0858 14.2258 69.0362 14.4221C66.3114 14.6838 63.5813 14.9953 60.8512 15.0503C55.1397 15.1654 49.4256 15.2047 43.7167 15.1314C38.8847 15.0712 34.0554 14.8409 29.2286 14.6184C26.9828 14.5163 25.1871 13.574 24.326 11.3465C23.792 9.96963 23.2711 8.58494 22.8182 7.18194C22.3419 5.70302 21.9571 4.19533 21.533 2.70856C19.9651 3.0724 19.9102 3.13259 20.0646 3.9545C20.4363 5.91504 20.9598 7.86773 21.0985 9.8466C21.1954 11.2208 21.2399 13.0662 20.4572 13.9457C18.1381 16.558 15.3949 18.796 12.8192 21.1832C12.6595 21.3716 12.4999 21.5601 12.3376 21.746C10.9686 22.2747 9.72003 22.9422 9.18343 24.4473C8.7908 25.5519 8.47672 26.6984 7.97154 27.748C6.68109 30.4179 6.13138 33.148 6.76744 36.1058C7.1496 37.8884 7.26741 39.7259 7.63124 41.5137C8.49242 45.7305 9.39808 49.9395 10.3692 54.1329C10.521 54.7899 11.0733 55.829 11.5078 55.8657C13.3139 56.0122 15.1515 55.9154 16.9628 55.7426C17.4444 55.6955 17.8266 54.9836 18.3292 54.7061C19.3448 54.1433 20.363 53.4811 21.4676 53.2089C22.8889 52.8555 24.394 52.7089 25.8625 52.7037C39.513 52.6513 53.1608 52.6382 66.8113 52.6461C69.1174 52.6461 71.4287 52.722 73.7269 52.9C75.9125 53.0675 78.0799 53.3921 79.4986 55.4207C79.6582 55.6484 80.0875 55.761 80.4069 55.7898C81.7078 55.9154 83.0139 55.9625 84.3122 56.0855C85.6498 56.2112 86.4901 55.6982 86.7911 54.3554C86.8958 53.8894 87.0947 53.4444 87.1889 52.9759C88.2333 47.8193 89.2542 42.6602 90.3064 37.5036C91.0132 34.038 90.9111 30.6927 89.1128 27.5229C88.7307 26.8502 88.4454 26.0832 88.2962 25.3241C87.914 23.3715 86.6628 22.3297 84.8698 21.7826C84.7075 21.5784 84.5478 21.3769 84.3855 21.1727C84.2756 21.1727 84.1657 21.1779 84.0557 21.1806L84.0583 21.1832ZM74.7268 2.76876C69.5048 0.604048 26.0195 0.71137 22.5172 2.88655C23.402 5.51718 24.2658 8.2054 25.2081 10.8648C25.852 12.6866 27.3204 13.4745 29.1527 13.5897C32.4979 13.7965 35.8458 14.0347 39.1962 14.0949C44.0361 14.1813 48.8811 14.1917 53.7236 14.108C58.4247 14.0268 63.1258 13.7886 67.8269 13.6054C69.8267 13.5269 71.379 12.718 72.0674 10.7287C72.9783 8.10331 73.8316 5.45698 74.7268 2.76876ZM17.2769 56.8342C15.8791 56.8342 14.6567 56.7452 13.45 56.8525C11.1518 57.0567 10.1179 56.4572 9.54465 54.2245C8.94 51.8661 8.41651 49.4867 7.893 47.11C7.49251 45.2856 7.147 43.448 6.77792 41.6157C6.61302 47.2278 6.61301 52.8084 6.61301 58.389C6.61301 60.483 6.60778 62.5744 6.61564 64.6685C6.61825 65.4721 6.78578 66.1919 7.79877 66.1971C10.5446 66.2102 13.2956 66.2521 16.0388 66.1422C16.4655 66.1238 17.2036 65.3778 17.2193 64.9433C17.3293 62.208 17.2743 59.4674 17.2743 56.8315L17.2769 56.8342ZM90.6022 41.409C89.6128 45.775 88.694 49.9657 87.702 54.1407C87.1418 56.4991 85.8932 57.2425 83.4903 56.931C82.3465 56.7818 81.1843 56.7713 80.0875 56.7033C80.0875 59.4831 80.1294 62.0797 80.0692 64.6763C80.043 65.8123 80.4618 66.2442 81.5848 66.2233C83.9379 66.1814 86.2911 66.2128 88.6469 66.2102C90.4792 66.2102 90.6022 66.0898 90.6022 64.2994C90.6022 57.7189 90.6022 51.1358 90.6022 44.5553V41.4116V41.409ZM78.9803 57.7843C79.2133 56.9546 79.1295 56.5384 78.2212 56.4939C75.9623 56.3866 73.7112 56.1039 71.4549 56.0515C65.356 55.9128 59.2571 55.8002 53.1582 55.7871C46.7531 55.7741 40.3453 55.8421 33.9428 55.9704C28.9826 56.0698 24.0249 56.3368 19.0647 56.4939C18.0176 56.5279 17.9182 56.9598 18.2742 57.7817H78.9829L78.9803 57.7843ZM18.6249 55.6092C38.7015 54.8553 58.553 54.8762 78.4777 55.3945C77.5066 54.7742 76.4962 54.1355 75.41 53.9522C73.4887 53.6277 71.5229 53.4471 69.5755 53.4366C57.8462 53.3842 46.117 53.379 34.3878 53.3999C30.862 53.4078 27.3335 53.4942 23.8129 53.6643C21.9754 53.7533 20.096 53.9601 18.6249 55.6065V55.6092ZM13.5417 19.7697C14.3191 18.7986 15.2954 17.927 15.832 16.8407C17.0387 14.3907 17.9077 11.7731 19.1406 9.33879C19.9834 7.67403 19.6536 6.19774 19.1799 4.56439C17.5544 6.237 13.1281 17.5055 13.5417 19.7723V19.7697ZM1.15806 24.3426C2.94322 24.3426 4.67081 24.353 6.39839 24.3426C8.68089 24.3269 8.80127 24.196 8.66516 21.9266C8.64422 21.5837 8.52907 21.2486 8.48981 20.9057C8.37464 19.9268 7.75949 19.5263 6.86429 19.6441C5.79633 19.7854 4.69697 19.9189 3.69969 20.2906C1.98781 20.9319 1.04287 22.471 1.16066 24.3452L1.15806 24.3426ZM92.4083 24.3373C93.1936 24.3373 93.9788 24.3452 94.7641 24.3373C96.2744 24.3216 96.5179 23.9185 95.8713 22.5181C94.9866 20.61 91.8011 19.0918 89.762 19.6886C89.3824 19.8011 88.9584 20.2487 88.8301 20.6335C88.6181 21.28 88.5841 21.9972 88.5553 22.6909C88.5082 23.8819 88.9191 24.5991 90.3169 24.3609C90.9948 24.2457 91.7094 24.34 92.4083 24.3373V24.3373Z" fill="#747474"/>
            <path d="M84.8671 21.78C86.6601 22.3323 87.914 23.3741 88.2961 25.3268C88.4453 26.0859 88.7306 26.8528 89.1128 27.5255C90.9111 30.6954 91.0131 34.0432 90.3064 37.5062C89.2567 42.6602 88.2333 47.822 87.1889 52.9785C87.0946 53.4445 86.8957 53.8921 86.791 54.358C86.49 55.7008 85.6498 56.2138 84.3122 56.0882C83.0113 55.9652 81.7051 55.918 80.4068 55.7924C80.0901 55.761 79.6582 55.651 79.4985 55.4233C78.0824 53.3947 75.9125 53.0701 73.7269 52.9026C71.4287 52.7272 69.1173 52.6513 66.8113 52.6487C53.1608 52.6409 39.5129 52.6566 25.8624 52.7063C24.394 52.7115 22.8889 52.8581 21.4675 53.2115C20.3629 53.4863 19.3473 54.1486 18.3291 54.7087C17.8292 54.9862 17.4444 55.7008 16.9628 55.7453C15.1514 55.918 13.3139 56.0149 11.5078 55.8683C11.0733 55.8317 10.521 54.7925 10.3691 54.1355C9.39804 49.9422 8.49238 45.7332 7.6312 41.5163C7.26736 39.7285 7.15218 37.891 6.7674 36.1085C6.13134 33.1506 6.68105 30.4231 7.9715 27.7506C8.4793 26.701 8.79076 25.5545 9.18339 24.4499C9.71999 22.9448 10.9686 22.2773 12.3349 21.7512C12.0836 23.3689 11.6989 24.976 11.6151 26.5989C11.5025 28.7924 12.2433 29.4494 14.4578 29.5541C16.8397 29.6667 19.2191 29.7975 21.622 29.9232C21.9361 31.1403 22.2057 32.3654 22.5748 33.5616C23.3496 36.0744 25.0483 37.4879 27.7025 37.6764C28.9171 37.7627 30.1316 37.8805 31.3462 37.8832C37.0524 37.8962 42.7613 37.8701 48.4675 37.8648C54.9145 37.8596 61.3642 37.9407 67.8086 37.8334C72.5228 37.7575 74.253 36.1608 75.1717 31.5539C75.2869 30.9728 75.4492 30.4022 75.5905 29.8211C76.0853 29.8211 76.4779 29.8368 76.8679 29.8211C78.9541 29.7295 81.0429 29.6771 83.1239 29.5122C84.1578 29.4311 85.3304 29.2688 85.4849 27.9103C85.7204 25.8346 85.8539 23.7432 84.8645 21.78H84.8671ZM73.3918 50.5023C73.3918 50.4892 73.3918 50.4735 73.3918 50.4605C75.0068 50.4605 76.6245 50.5233 78.2316 50.4264C78.7866 50.3924 79.3153 49.9526 79.8571 49.6987C79.3598 49.2773 78.8703 48.8428 78.352 48.4449C78.2342 48.356 78.0144 48.3847 77.839 48.3847C74.3577 48.39 70.8763 48.3874 67.3976 48.4319C67.1228 48.4345 66.649 48.7329 66.6228 48.9397C66.5809 49.2616 66.7485 49.7877 66.9972 49.9343C67.4971 50.2275 68.107 50.45 68.6802 50.4762C70.2481 50.5468 71.8213 50.4997 73.3918 50.4997V50.5023ZM23.8862 50.4526C23.8862 50.4709 23.8862 50.4866 23.8862 50.505C25.4096 50.505 26.933 50.5259 28.4564 50.4919C28.9223 50.4814 29.472 50.4474 29.8254 50.2013C30.1945 49.9422 30.3777 49.4134 30.6394 49.0025C30.2547 48.8036 29.8751 48.4476 29.4825 48.4319C26.5299 48.3298 23.5721 48.2748 20.6168 48.2539C19.931 48.2486 19.1903 48.3036 18.5726 48.5654C18.0935 48.7669 17.7663 49.3323 17.3711 49.7354C17.8449 49.9736 18.3108 50.395 18.795 50.4186C20.4886 50.5023 22.1874 50.4526 23.8862 50.4526V50.4526Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M12.8193 21.1858C15.395 18.8012 18.1356 16.5606 20.4573 13.9483C21.24 13.0688 21.1929 11.2234 21.0986 9.84921C20.9599 7.87035 20.4364 5.91765 20.0647 3.95711C19.9077 3.1352 19.9626 3.075 21.5332 2.71116C21.9572 4.19792 22.342 5.70564 22.8184 7.18455C23.2712 8.59017 23.7921 9.97223 24.3261 11.3491C25.1899 13.5766 26.9855 14.5163 29.2287 14.621C34.0555 14.8435 38.8849 15.0712 43.7169 15.134C49.4283 15.2073 55.1424 15.1681 60.8513 15.0529C63.584 14.9979 66.3115 14.6864 69.0364 14.4247C71.0859 14.2284 72.3711 12.9484 73.0281 11.1082C73.8893 8.69487 74.6065 6.22915 75.3839 3.78698C75.4991 3.42314 75.609 3.05668 75.7242 2.67975C77.0592 2.80277 77.3261 3.33937 77.0304 4.59579C76.5435 6.66104 76.2739 8.78125 76.0174 10.8936C75.8237 12.4903 76.3367 13.9116 77.5251 15.0372C79.7003 17.0972 81.8859 19.1441 84.0689 21.1963C81.3676 21.1963 78.6532 21.0209 75.9702 21.246C73.6092 21.4449 71.2403 21.9292 68.9631 22.5967C67.1046 23.1411 65.7252 24.4656 65.2828 26.4994C64.9923 27.8265 65.3482 28.2034 66.712 28.2767C68.6176 28.3788 70.5598 28.3605 72.4156 28.7374C74.9154 29.2479 74.8866 29.3892 74.3029 31.8471C73.392 35.6818 71.9445 36.9199 68.0312 36.933C55.4278 36.9748 42.8243 36.9984 30.2208 36.9644C24.8758 36.9487 23.8157 35.9461 22.6901 30.6692C22.4833 29.6981 22.7189 29.1955 23.601 29.0725C25.8286 28.761 28.0639 28.4626 30.3072 28.2872C31.9353 28.1616 32.341 27.7585 31.8777 26.1775C31.3149 24.2562 29.9093 23.1542 28.1032 22.4946C23.389 20.7696 18.5021 21.1282 13.6282 21.2957C13.3612 21.3036 13.0916 21.2251 12.822 21.1884L12.8193 21.1858ZM48.6326 24.0913C48.6954 24.0625 48.8499 24.0389 48.9153 23.9525C49.4257 23.2668 49.9885 22.6071 50.3733 21.8559C50.5068 21.5994 50.2084 20.7853 50.0539 20.7696C49.0802 20.6702 48.0855 20.678 47.1118 20.7748C46.9574 20.7905 46.6537 21.5784 46.7794 21.7721C47.3134 22.5836 47.9861 23.306 48.6326 24.0913V24.0913Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M74.7242 2.76875C73.829 5.45697 72.9731 8.1033 72.0648 10.7287C71.3764 12.718 69.8242 13.5269 67.8244 13.6054C63.1232 13.7886 58.4248 14.0242 53.721 14.108C48.8812 14.1917 44.0361 14.1839 39.1936 14.0949C35.8432 14.0347 32.4953 13.7965 29.1501 13.5897C27.3178 13.4771 25.8494 12.6866 25.2055 10.8648C24.2632 8.20539 23.3994 5.5198 22.5146 2.88655C26.0169 0.711366 69.5022 0.604043 74.7242 2.76875Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M12.8193 21.1858C13.0889 21.225 13.3585 21.3036 13.6255 21.2931C18.4968 21.1256 23.3863 20.767 28.1005 22.4919C29.9067 23.1542 31.3149 24.2535 31.8751 26.1748C32.3384 27.7558 31.93 28.1589 30.3045 28.2846C28.0613 28.4573 25.8259 28.7557 23.5984 29.0698C22.7189 29.1929 22.4807 29.6928 22.6875 30.6665C23.8104 35.9435 24.8705 36.946 30.2182 36.9617C42.8216 36.9958 55.4251 36.9722 68.0286 36.9303C71.9418 36.9172 73.3893 35.6818 74.3002 31.8444C74.8839 29.3866 74.9127 29.2452 72.413 28.7348C70.5571 28.3552 68.6149 28.3762 66.7093 28.2741C65.343 28.2008 64.9896 27.8239 65.2802 26.4968C65.7225 24.463 67.102 23.1385 68.9605 22.594C71.2377 21.9265 73.6066 21.4423 75.9676 21.2434C78.648 21.0157 81.365 21.1936 84.0663 21.1936L84.0558 21.1832C84.0899 21.2407 84.1213 21.2983 84.1553 21.3533C84.2338 21.2931 84.3097 21.2355 84.3883 21.1753C84.5505 21.3795 84.7102 21.581 84.8699 21.7826C85.8567 23.7431 85.7232 25.8319 85.4876 27.9103C85.3332 29.2688 84.1605 29.4311 83.1266 29.5122C81.0457 29.6771 78.9569 29.7294 76.8707 29.8211C76.4807 29.8394 76.0906 29.8211 75.5933 29.8211C75.452 30.4022 75.2897 30.9728 75.1745 31.5539C74.2557 36.1608 72.5229 37.7575 67.8114 37.8334C61.3643 37.9381 54.9173 37.8596 48.4703 37.8648C42.7641 37.87 37.0552 37.8962 31.3489 37.8831C30.1344 37.8805 28.9198 37.7627 27.7053 37.6763C25.0511 37.4879 23.3523 36.0744 22.5775 33.5615C22.2085 32.3653 21.9388 31.1377 21.6247 29.9232C19.2218 29.7975 16.8425 29.6693 14.4605 29.5541C12.2487 29.4494 11.5053 28.7924 11.6179 26.5989C11.7016 24.976 12.0864 23.3688 12.3377 21.7512C12.5 21.5601 12.6596 21.3716 12.8193 21.1858V21.1858ZM16.0127 23.2955C16.141 23.2667 16.2719 23.2353 16.4001 23.2065C16.374 23.1516 16.3451 23.094 16.319 23.039C16.209 23.1175 16.1017 23.1961 15.9918 23.2746C15.8085 23.3505 15.6253 23.4264 15.4395 23.5023C13.992 24.4054 13.1648 26.5099 13.5732 28.5751H21.4232C21.6012 27.5124 21.164 27.091 20.049 27.2297C18.9732 27.3632 17.8817 27.4522 16.8006 27.4417C15.251 27.4286 14.7641 26.769 15.1097 25.2849C15.2379 24.7352 15.4133 24.1986 15.5651 23.6515C15.7143 23.5337 15.8635 23.4133 16.0127 23.2955V23.2955ZM81.1687 23.3008C81.3205 23.4133 81.4749 23.5259 81.6267 23.6384C81.7838 24.1358 81.9644 24.6279 82.0927 25.1304C82.5272 26.8083 82.0691 27.4496 80.3625 27.4443C79.3233 27.4417 78.2763 27.3632 77.245 27.2323C76.1247 27.0884 75.575 27.4286 75.8158 28.8683C78.4674 28.7426 81.1163 28.6196 83.7417 28.4966C83.8857 26.0021 83.1973 24.3844 81.7419 23.4971C81.5613 23.4186 81.3807 23.3374 81.2001 23.2589C81.0797 23.2091 80.9593 23.162 80.8389 23.1123C80.8284 23.1489 80.8153 23.1856 80.8049 23.2249C80.9253 23.251 81.0456 23.2772 81.166 23.3008H81.1687ZM67.8218 26.2115C69.7614 26.2115 71.646 26.2062 73.5307 26.2115C75.5095 26.2193 75.698 25.9707 75.2504 23.9107C71.7219 23.45 68.2956 24.408 67.8218 26.2089V26.2115ZM29.5533 26.2115C28.7261 24.3556 25.1453 23.4002 21.8001 23.9604C21.9624 24.7823 21.2871 26.0649 22.7477 26.1696C24.9516 26.3293 27.1766 26.2115 29.5533 26.2115ZM76.0409 26.4209C77.5408 26.5099 78.9987 26.6355 80.4567 26.6512C80.7787 26.6538 81.3048 26.3371 81.3964 26.057C81.7026 25.1121 80.9305 23.9316 79.9463 23.8609C78.7553 23.7745 77.5512 23.84 76.3105 23.84C76.2163 24.7352 76.1377 25.4969 76.0409 26.4209V26.4209ZM21.2138 26.3895C21.0777 25.4341 20.9651 24.6436 20.8604 23.9002C19.5255 23.9002 18.3083 23.8033 17.1121 23.9264C15.9394 24.0468 15.7771 25.1121 15.8373 25.9968C15.8557 26.2586 16.798 26.6381 17.3215 26.646C18.5648 26.6643 19.8108 26.4942 21.2138 26.3895V26.3895ZM66.2618 26.9549C69.2903 27.3632 72.0963 27.7401 75.0279 28.1354C75.0462 27.9338 75.0855 27.5333 75.1405 26.9601C72.9129 26.9601 70.832 27.0281 68.7589 26.9261C67.9946 26.8894 67.2512 26.4523 66.4345 26.1748C66.4188 26.2429 66.3298 26.646 66.2618 26.9549V26.9549ZM30.637 25.6278C29.6423 27.7323 27.9592 26.803 26.6295 26.9287C25.1453 27.07 23.6402 26.9601 21.9807 26.9601C22.1587 27.6145 22.2634 28.0045 22.287 28.0909C25.237 27.7087 28.0403 27.3449 30.9484 26.9679C30.8647 26.612 30.7731 26.2089 30.637 25.6278V25.6278ZM84.5584 25.8817C84.6448 22.4108 84.1763 21.8088 82.0456 22.3349C82.8622 23.4866 83.7548 24.7456 84.5584 25.8817ZM12.6544 25.9785C13.4109 24.8713 14.3454 23.5049 15.1961 22.2564C12.7225 22.1752 12.3115 22.7903 12.6544 25.9785ZM70.4289 22.971C73.1956 23.3348 75.2504 23.0155 75.7844 22.1229C73.8474 22.4291 72.1382 22.6987 70.4289 22.971ZM21.6405 22.1647C21.6064 22.4056 21.5724 22.6438 21.5358 22.8846C23.1874 23.039 24.8417 23.1934 26.4934 23.3479C26.5117 23.2222 26.53 23.0992 26.5484 22.9736C24.9124 22.704 23.2764 22.437 21.6405 22.1674V22.1647ZM80.2578 22.9474C78.4988 22.047 76.923 22.0234 76.5068 22.9474H80.2578ZM17.1749 22.8558H20.9233C19.8972 22.0313 18.2874 22.1595 17.1749 22.8558Z" fill="#747474"/>
            <path d="M17.274 56.8342C17.274 59.4701 17.329 62.2106 17.2191 64.946C17.2008 65.3779 16.4652 66.1265 16.0386 66.1448C13.2954 66.2548 10.547 66.2129 7.79855 66.1998C6.78556 66.1946 6.61803 65.4747 6.61541 64.6711C6.60756 62.5771 6.61279 60.4857 6.61279 58.3916C6.61279 52.811 6.61279 47.2304 6.7777 41.6184C7.14677 43.4507 7.49229 45.2882 7.89278 47.1126C8.41628 49.4894 8.93716 51.8687 9.54443 54.2271C10.1177 56.4599 11.1516 57.0593 13.4498 56.8551C14.6565 56.7478 15.8789 56.8368 17.2767 56.8368L17.274 56.8342Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M90.5996 41.4064V44.55C90.5996 51.1306 90.5996 57.7137 90.5996 64.2942C90.5996 66.0846 90.4766 66.2024 88.6443 66.205C86.2911 66.205 83.9353 66.1762 81.5821 66.2181C80.4592 66.239 80.0404 65.8097 80.0666 64.6711C80.1268 62.0771 80.0849 59.4805 80.0849 56.6981C81.1791 56.7661 82.3412 56.7792 83.4877 56.9258C85.8933 57.2373 87.1392 56.4939 87.6994 54.1355C88.6914 49.9631 89.6075 45.7724 90.5996 41.4037V41.4064Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M78.9774 57.7817H18.2687C17.9127 56.9598 18.0122 56.5279 19.0592 56.4938C24.0195 56.3368 28.9771 56.0698 33.9373 55.9703C40.3425 55.8395 46.7476 55.774 53.1527 55.7871C59.2516 55.7976 65.3531 55.9127 71.4494 56.0515C73.7083 56.1038 75.9594 56.3865 78.2157 56.4938C79.124 56.5383 79.2078 56.9545 78.9748 57.7843L78.9774 57.7817Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M18.6223 55.6092C20.0934 53.9627 21.9728 53.756 23.8103 53.667C27.3309 53.4968 30.8593 53.4104 34.3852 53.4026C46.1144 53.379 57.8436 53.3869 69.5728 53.4392C71.5203 53.4471 73.4887 53.6303 75.4073 53.9549C76.4936 54.1381 77.5014 54.7768 78.4751 55.3972C58.5477 54.8789 38.6989 54.8579 18.6223 55.6118V55.6092Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M13.5391 19.7697C13.1255 17.5029 17.5518 6.23438 19.1773 4.56177C19.6511 6.19512 19.9809 7.67141 19.138 9.33617C17.9052 11.7705 17.0361 14.388 15.8294 16.8381C15.2929 17.927 14.3165 18.7986 13.5391 19.7671V19.7697Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M1.15543 24.3426C1.04026 22.4684 1.98518 20.9293 3.69444 20.288C4.69172 19.9137 5.79111 19.7828 6.85907 19.6415C7.75689 19.5237 8.36938 19.9241 8.48456 20.9031C8.52382 21.246 8.63897 21.581 8.65991 21.9239C8.79864 24.1934 8.67826 24.3242 6.39314 24.3399C4.66556 24.353 2.93797 24.3399 1.15281 24.3399L1.15543 24.3426Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M92.4083 24.3399C91.7095 24.3399 90.9975 24.2457 90.3169 24.3609C88.9192 24.5965 88.5082 23.8819 88.5553 22.6909C88.5815 21.9999 88.6181 21.2826 88.8301 20.6335C88.9558 20.2487 89.3798 19.7985 89.762 19.6886C91.8037 19.0918 94.9892 20.6099 95.8714 22.5181C96.5179 23.9159 96.2745 24.3216 94.7641 24.3373C93.9789 24.3452 93.1936 24.3373 92.4083 24.3399V24.3399Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M84.0373 19.6441C82.6997 18.8536 81.671 17.8694 81.1056 16.3198C80.2576 13.998 79.3153 11.6867 78.1531 9.50632C77.2448 7.8023 77.5222 6.27365 78.1609 4.26599C78.8886 5.66114 79.5927 6.73957 80.0429 7.91485C81.4224 11.5192 82.7076 15.1602 84.0164 18.7908C84.1027 19.029 84.0844 19.3064 84.1158 19.5655L84.0373 19.6441V19.6441Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M17.3081 15.9507C18.1038 13.8017 18.8996 11.6553 19.6927 9.50629C20.8339 12.4667 19.4126 14.3566 17.3133 15.9559L17.3081 15.9507Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M79.7603 15.7832C77.5275 14.0478 76.3627 12.4668 77.415 9.38855C78.3233 11.658 79.1242 13.6525 79.9226 15.6471C79.8676 15.6942 79.8153 15.7387 79.7577 15.7832H79.7603Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M79.9252 15.6471C79.9671 15.7806 80.009 15.9141 80.0509 16.0476C79.9567 15.9586 79.8598 15.8696 79.7629 15.7806C79.8179 15.7361 79.8729 15.6916 79.9252 15.6445V15.6471Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M17.316 15.956C17.2768 16.011 17.2375 16.0633 17.1982 16.1183C17.2349 16.0633 17.2741 16.0057 17.3108 15.9507L17.316 15.956Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M84.1159 19.5656C84.1447 19.6284 84.1761 19.6912 84.2049 19.7514C84.1499 19.7148 84.0923 19.6781 84.0374 19.6441L84.1159 19.5656V19.5656Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M84.3854 21.1754C84.3069 21.2356 84.231 21.2931 84.1524 21.3533C84.1184 21.2958 84.087 21.2382 84.053 21.1832C84.1629 21.1832 84.2729 21.178 84.3828 21.1754H84.3854Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M73.3919 50.5023C71.8214 50.5023 70.2482 50.5494 68.6803 50.4787C68.1071 50.4526 67.4972 50.2301 66.9973 49.9369C66.746 49.7903 66.5811 49.2642 66.6229 48.9422C66.6491 48.7355 67.1229 48.4371 67.3977 48.4344C70.8791 48.3899 74.3578 48.3925 77.8391 48.3873C78.0119 48.3873 78.2344 48.3585 78.3522 48.4475C78.8704 48.8428 79.3573 49.2799 79.8572 49.7013C79.3154 49.9552 78.7867 50.395 78.2318 50.429C76.6246 50.5285 75.0069 50.463 73.3919 50.463C73.3919 50.4761 73.3919 50.4918 73.3919 50.5049V50.5023ZM67.7825 49.2433C67.7904 49.3401 67.8009 49.437 67.8087 49.5364H78.182C78.182 49.4396 78.182 49.3427 78.182 49.2433H67.7825Z" fill="#747474"/>
            <path d="M23.8835 50.4526C22.1873 50.4526 20.4859 50.5049 18.7924 50.4186C18.3081 50.395 17.8422 49.9736 17.3684 49.7354C17.7637 49.3323 18.0909 48.7669 18.5699 48.5654C19.1876 48.3036 19.9258 48.2486 20.6142 48.2539C23.5694 48.2748 26.5246 48.3298 29.4798 48.4319C29.8724 48.4449 30.252 48.8036 30.6368 49.0025C30.3724 49.4134 30.1918 49.9422 29.8227 50.2013C29.4693 50.45 28.9197 50.4814 28.4537 50.4919C26.9303 50.5259 25.4069 50.505 23.8835 50.505C23.8835 50.4866 23.8835 50.4709 23.8835 50.4526V50.4526ZM18.6301 49.5417H29.6552C29.6526 49.4291 29.6499 49.3166 29.6473 49.204C25.9723 48.9266 22.2973 48.8114 18.6301 49.5417Z" fill="#747474"/>
            <path d="M48.6325 24.0887C47.986 23.3034 47.3158 22.581 46.7792 21.7695C46.6536 21.5758 46.9572 20.7879 47.1117 20.7722C48.0854 20.6754 49.0801 20.6675 50.0538 20.767C50.2108 20.7827 50.5067 21.5968 50.3732 21.8533C49.9884 22.6045 49.423 23.2641 48.9152 23.9499C48.8497 24.0389 48.6927 24.0599 48.6325 24.0887V24.0887Z" fill="#747474"/>
            <path d="M15.5676 23.6515C15.4131 24.1933 15.2378 24.7326 15.1121 25.2822C14.7692 26.7664 15.2561 27.426 16.8031 27.4391C17.8867 27.447 18.9756 27.358 20.0514 27.2271C21.1665 27.091 21.601 27.5098 21.4256 28.5725H13.5756C13.1673 26.5046 13.9944 24.4027 15.4419 23.4997C15.4838 23.5494 15.5257 23.6018 15.5676 23.6541V23.6515Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M81.747 23.4945C83.2024 24.3819 83.8908 25.9995 83.7468 28.494C81.124 28.617 78.4725 28.7427 75.8209 28.8657C75.5801 27.4261 76.1271 27.0858 77.25 27.2297C78.2814 27.3606 79.3284 27.4391 80.3676 27.4418C82.0742 27.447 82.5296 26.8083 82.0977 25.1278C81.9669 24.6227 81.7889 24.1332 81.6318 23.6332C81.6711 23.5835 81.7104 23.5364 81.7496 23.4919L81.747 23.4945Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M67.8242 26.2063C68.298 24.4054 71.7244 23.4474 75.2528 23.9081C75.7004 25.9681 75.512 26.2141 73.5331 26.2089C71.6485 26.201 69.7638 26.2089 67.8242 26.2089V26.2063Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M29.5557 26.2036C27.179 26.2036 24.9541 26.3214 22.7501 26.1618C21.2869 26.0571 21.9648 24.7745 21.8025 23.9525C25.1478 23.3924 28.7312 24.3478 29.5557 26.2036Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M76.0459 26.4131C76.1427 25.4891 76.2213 24.7274 76.3155 23.8322C77.5562 23.8322 78.7603 23.7667 79.9513 23.8531C80.9355 23.9238 81.7076 25.1043 81.4014 26.0492C81.3098 26.3293 80.7837 26.6486 80.4617 26.6434C79.0037 26.6277 77.5458 26.5021 76.0459 26.4131V26.4131Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M21.2163 26.3843C19.8133 26.489 18.5673 26.6617 17.324 26.6408C16.8005 26.6329 15.8582 26.2534 15.8399 25.9916C15.7796 25.1069 15.9419 24.0416 17.1146 23.9212C18.3108 23.7981 19.528 23.895 20.8629 23.895C20.9676 24.6384 21.0802 25.4315 21.2163 26.3843V26.3843Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M66.2642 26.947C66.3322 26.6381 66.4212 26.235 66.4369 26.167C67.2536 26.4445 67.997 26.8816 68.7613 26.9182C70.8344 27.0203 72.9154 26.9523 75.1429 26.9523C75.0879 27.5255 75.0513 27.926 75.0303 28.1275C72.1013 27.7323 69.2927 27.3554 66.2642 26.947V26.947Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M30.6394 25.6226C30.7755 26.2063 30.8671 26.6068 30.9509 26.9627C28.0402 27.3397 25.2394 27.7035 22.2894 28.0857C22.2659 27.9993 22.1611 27.6093 21.9832 26.9549C23.6427 26.9549 25.1478 27.0622 26.6319 26.9235C27.959 26.7978 29.6447 27.7271 30.6394 25.6226V25.6226Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M84.5634 25.8764C83.7572 24.7404 82.8672 23.4814 82.0505 22.3297C84.1838 21.8035 84.6498 22.4056 84.5634 25.8764Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M12.6596 25.9734C12.3167 22.7852 12.7303 22.1727 15.2012 22.2512C14.3479 23.4998 13.4161 24.8661 12.6596 25.9734Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M70.4314 22.9683C72.1407 22.6987 73.8499 22.4265 75.7869 22.1202C75.2529 23.0128 73.1981 23.3322 70.4314 22.9683Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M21.643 22.1595C23.279 22.4291 24.915 22.6961 26.5509 22.9657C26.5326 23.0914 26.5143 23.2144 26.4959 23.34C24.8443 23.1856 23.19 23.0312 21.5383 22.8767C21.5724 22.6385 21.6064 22.3977 21.643 22.1569V22.1595Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M80.2602 22.9448H76.5093C76.9255 22.0208 78.5012 22.0444 80.2602 22.9448Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M17.1772 22.8532C18.2897 22.1569 19.8995 22.0286 20.9256 22.8532H17.1772Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M81.1684 23.2981C81.0479 23.272 80.9275 23.2458 80.8071 23.2222C80.8176 23.1856 80.8307 23.1489 80.8412 23.1097C80.9616 23.1594 81.082 23.2065 81.2024 23.2563L81.1657 23.2981H81.1684Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M15.9941 23.272C16.1041 23.1935 16.2114 23.115 16.3213 23.0364C16.3475 23.0914 16.3763 23.149 16.4025 23.204C16.2742 23.2328 16.1434 23.2642 16.0151 23.293L15.9968 23.2694L15.9941 23.272Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M16.0128 23.2929C15.8636 23.4133 15.7144 23.5311 15.5652 23.6515C15.5259 23.5992 15.484 23.5494 15.4421 23.4997C15.6254 23.4238 15.8086 23.3479 15.9918 23.272L16.0102 23.2955L16.0128 23.2929Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M81.2054 23.2563C81.386 23.3348 81.5666 23.4159 81.7472 23.4945C81.7079 23.5416 81.6687 23.5887 81.6294 23.6358C81.475 23.5233 81.3231 23.4107 81.1687 23.2982L81.2054 23.2563Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M67.7825 49.2433H78.182C78.182 49.3401 78.182 49.437 78.182 49.5364H67.8086C67.8008 49.4396 67.7903 49.3428 67.7825 49.2433Z" fill="#FEFDFE" fill-opacity="0.7"/>
            <path d="M18.6328 49.5417C22.3026 48.8088 25.975 48.9266 29.6501 49.204C29.6527 49.3166 29.6553 49.4291 29.6579 49.5417H18.6328Z" fill="#FEFDFE" fill-opacity="0.7"/>
            </svg>

        </div>
    </div>
  )
}

export default CarBack