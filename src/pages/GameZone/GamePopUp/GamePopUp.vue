<script setup>
// import { defineProps } from "vue";

// const props = defineProps({
//     icon: String,
//     title: String,
//     url: String,
// });
</script>

<template>
  <div class="z-100 flex align-middle justify-center h-full w-full">
    <div
      class="w-[728px] h-[380px] bg-[#FFFFFF] rounded-[30px] border-[3px] border-[#3232321A] shadow-[10px_10px_10px_0px_#0000001A] p-5 relative"
    >
      <img
        src="/assets/gameImages/popup/background.svg"
        alt="background"
        class="absolute top-0 right-0"
      />

      <div class="p-5">
        <h3
          class="font-jakarta font-bold text-[36px] text-[500] leading-[54px] text-[#323232] mb-[25px]"
        >
          Spelling Bee Statistic
        </h3>
        <div class="flex">
          <div class="w-9/12">
            <div class="flex">
              <div class="w-auto">
                <div class="w-auto max-w-[80%]">
                  <span
                    class="font-poppins font-semibold text-[36px] text-[500] leading-[54px] text-[#087BB4] text-center"
                  >
                    10
                  </span>
                  <h3
                    class="font-poppins text-[16px] text-[400] leading-[24px] text-[#6E777C] text-center"
                  >
                    Total Played
                  </h3>
                </div>
              </div>
              <div class="w-auto">
                <div class="w-auto max-w-[80%]">
                  <span
                    class="font-poppins font-semibold text-[36px] text-[500] leading-[54px] text-[#087BB4] text-center"
                  >
                    73%
                  </span>
                  <h3
                    class="font-poppins text-[16px] text-[400] leading-[24px] text-[#6E777C] text-center"
                  >
                    Win Percentages
                  </h3>
                </div>
              </div>
              <div class="w-auto">
                <div class="w-auto max-w-[80%]">
                  <span
                    class="font-poppins font-semibold text-[36px] text-[500] leading-[54px] text-[#087BB4] text-center"
                  >
                    2
                  </span>
                  <h3
                    class="font-poppins text-[16px] text-[400] leading-[24px] text-[#6E777C] text-center"
                  >
                    Current Streak
                  </h3>
                </div>
              </div>
              <div class="w-auto">
                <div class="w-auto max-w-[80%]">
                  <span
                    class="font-poppins font-semibold text-[36px] text-[500] leading-[54px] text-[#087BB4] text-center"
                  >
                    4
                  </span>
                  <h3
                    class="font-poppins text-[16px] text-[400] leading-[24px] text-[#6E777C] text-center"
                  >
                    Max Streak
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-[10%] right-[5%] w-full flex justify-end">
          <div class="w-8/12 flex justify-between">
            <button
              class="font-poppins font-semibold px-9 py-4 border-[1.5px] w-[230px] h-[56px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300 text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] mobile:w-full"
            >
              <div class="flex align-middle justify-center gap-2">
                Play Again
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <mask
                    id="mask0_2114_2376"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="28"
                    height="28"
                  >
                    <rect
                      y="10"
                      width="20"
                      height="20"
                      transform="rotate(-30 0 10)"
                      fill="url(#pattern0_2114_2376)"
                    />
                  </mask>
                  <g mask="url(#mask0_2114_2376)">
                    <rect
                      x="-11.7852"
                      y="9.58691"
                      width="51.25"
                      height="36.25"
                      transform="rotate(-30 -11.7852 9.58691)"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_2114_2376"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_2114_2376"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_2114_2376"
                      width="512"
                      height="512"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13nCVVnffxT/fkGZhhyFEGGBEBySIIBoKAoigrwTWASlLUdc366Cquj6uu7vKwhhVEDKAiKgIGJJiQLElyGGAAyQwMTE49zx+n2xlmOtx76977O1X1eb9e31cPM033756qW3Vu1alzQJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZJUHT3RBUiZmwSsM0jWBtbo/56p/V9HAZP7/zwOmLjSz1gELO3/72f6vy4F5vT/eSGwAFgGPA3MGuLrwM+QpELsAKiuJgDTgM1XySasOMGvQzqR5+RZUmdgFvAk8CDwwEqZCTwKLA+qT1JJ2AFQla0D7AC8GNiSFSf5FwAbBNbVaYtYvWNwN3AbcBewJK40SbmwA6AqGAu8ENgV2BbYrv/rlpFFZWopqXNwO3A9qVNwO3AH0BdYl6QuswOgspkM7NGfXYCXAFvgvlzUXFJH4GbgGuAq7BRIleZBU7nbGNgL2Lv/685Ab2hF9TGH1CG4HLgCuJI09kBSBdgBUE7GAi8nnewHPuWvE1qRVtZHukpwVX/+BNwfWZCk1tkBULQtgf37cwAwJbYcNek+4NL+XEx6SkFSCdgBULdNAvYE3gAcQnoUT9WwFPgb8GvgV8CNOIZAypYdAHXD9sChwIHAy4DRseWoS54ALgF+Q+oUzBn+2yV1kx0Adcp2wOHAEaTn8FVvi0idgZ8B5+OtAimcHQC108BJ/0hgm+BalK9lwNWkzsCPSTMaSuoyOwAqajfSSf8wnHhHzVsM/B74OfBLVqyTIEnK0FTgeOAm0pzzxrQjC4FzSANERyFJykIv6VG9c0j3c6NPFqba+TvwZdIsj5I6wFsAGsmmwNuA9+Aje+q+PuAPwJmk2wTzY8uRpGobC/wz6d5sH/GfBo1ZDjwFnEJa6EmS1EZTgA+SVouLPtgbM1wuJ40V8CqmJBWwFemT1VziD+zGNJO7SJ3WiUiSGrY3aVDfUuIP5MYUyROkQYObIEka1FjSc/vXEH/QNqbdWQT8EHgJkiQgnfiPBx4i/iBtTDdyCWmiKkmqpTHAUcC9xB+QjYnIJcCuSFJNDJz4ZxB/ADYmOn2kJYp3QZIqauDEfw/xB11jcstAR2BnJKkiRgHvAu4j/iBrTO5ZBpyNq1ZKKrl9cWEeY1rJEuBUYH0kqUS2Jj3HH30QNabseRr4BDAOScrYVNKkJwuJP3AaU6XcTZonQ5KyMob0LP8TxB8ojaly/gDshCRlYH/gVuIPjMbUJctIswpuiCQF2Ji0Dnr0wdCYumY2acGhXqQKcSnNfPUCxwJfA9YMrkUSXEm6BXdbdCFSO4yKLkCDeglwHvBeHJUs5WIz4DhgEnA5aRVNqbS8ApCX8cAngU+RFu+RlKcZwHuA30cXIrXKDkA+XkmakMSZyaRyWA6cBXwImBVci9Q0B7XEmwp8D/gTnvylMukB3kF6Ouew4FqkpnkFINY+wA9I9xYlldvPgBOAZ6ILkRrhFYAYY4CTgEvx5C9VxeHAjaTbeVL2fAqg+14MXAi8Ba/ASFWzFnA0sA5pNsFlseVIQ/ME1D09pEeITgYmBtciqfOuA94O3BVdiDQYrwB0xwaktcc/TLr8L6n6NgaOAeYC1wbXIq3GKwCddyhwGrBudCGSwlxAmtnzyehCpAEOAuyc0aQle3+BJ3+p7g4hDRDcM7oQaYC3ADpjPdJUvu/AqyySksmkAYKLgSuCa5HsAHTAXqTpQXeMLkRSdnpJS3u/EPgdsCS2HNWZtwDa63jSoz8bRxciKWtvI60uuFV0IaovOwDtMR44gzSXv4v4SGrEjsANpIHCUtd5C6C46cAlwEHRhUgqnXHAEcAE4I+kBYakrnCAWjGvBX4CTIkuRFLpDcwQ+lx0IaoHbwG07ljgfDz5S2qP15KeDtg8uhDVgx2A5vWQFvL5Ds7qJ6m9tgeuAnaLLkTV5y2A5owHvke6TCdJnTIPeCtpBkGpIxwE2Lh1gN8Cr4suRFLljSUNDpwNXBNciyrKDkBjppNG6O4cXYik2ugljQtYm/SkkU8IqK28BTCyvUjT+jqfv6QovyNdEZgTXYiqw0GAw3sbaWY/T/6SIh1EOhatF12IqsMOwNCOB36IM/tJysNuwGXAptGFqBrsAAzufcC3sX0k5WUb4C+4hoDawBPc6j4BfAPHR0jK0zRSJ2C74DpUcnYAnu/fgS9HFyFJI9iINCbAZcfVMj/lJj3AycAHowuRpCbMJj0qeHV0ISofOwBpLoTTgHdHFyJJLZgHHEK6IiA1rO4dgNGkqX3fHl2IJBUwH/gn4KLoQlQede4AjALOBg6LLkSlsBiYtUqeBJ7q//M80kxts1f6/nn9f55HWvd9dP9/T2bFLJxT+v9t7VUytf/r+qRpqKWRLALeQJo1UBpRXTsAvaRP/kdFF6JsLAQeAO4HZvZn5T8/EVMWABNJS8RutlI2J40G3w4nh9EK80ljAi6LLkT5q2MHoAf4FvCe6EIUYjnpxH5zf24B/gbcC/QF1lXEuqSOwIuBbfuzA3YM6moOcAAODNQI6tgB+Brwkegi1DUPAZcDVwLXA7dSn/nUpwG7r5RdgEmRBalrZgP7AjdGF6J81a0DcBLwuegi1DHLSJ/mryCd8C8H/h5aUV5Gka4U7E06ObwaxxdU2VOkbXxbcB3KVJ06AB8FvhpdhNruQdJKaRcCv6c+n+7boRfYidQZ2Bd4JV4hqJrHgFcBd0cXIkV5L+n+7nJT+iwineg/ilOhtttY4DWkqbAfJH5bm/bkQVxASDV1FOnScPSb0LSeBcC5wJHAGqgbeoBdSdNj30T8PmCK5WZgLaQaORBYQvybzzSfhcAFpEma1lx1w6rrtgI+C9xF/L5hWssfSXNOSJW3A/As8W8603j6SJf334mfVnK2O/A/wOPE7zOmuZyNi8Cp4jbGe5hlyqOkVRinD7Yxla3RwMGk2zNeaStP/nuwjSlVwUTgGuLfZGb4LCNNWXo4MGbQLaky2Qj4BGk2xeh9y4ycDw++GaXyGgX8ivg3lxk6s4GvkCapUfWMBt4MXIpP3uScZcARQ2xDqZS+TvwbywyemcCHcEBfnWwLfJ/06Gb0/mdWz3xgt6E2nlQmHyL+DWVWzw2kRzEHVsJT/WxImoVzNvH7o3l+HgE2GXLLSSXwJnzWP7f8njQNqTRgbeAzpJUVo/dPsyJXAeOH2W5StrYH5hL/JjIplwP7DLvFVHeTgE8BTxO/v5qUHw67xaQMrQncTvybx6RFeA4ffnNJz7MG6ckBbw3kkY8Nv7mkfPQA5xH/pql7/gYcQr0WllJ7rQf8F2lQWvT+XOcsJc3rIGXvU8S/Yeqcx4HjSI9eSu2wGfBjfHwwMrNxQi5lbj9SbzX6zVLHLAZOAaaMuJWk1rwUuJL4fb2uuRmYMOJWkgJshqOIo3IJ6dluqdN6SI+PPkr8fl/HnDbyJpK6axxwLfFvjrrlLtI68VK3TSaND/CKX/dzVAPbR+qa04h/U9QpS0iX+yc1snGkDtoRO//dzlxgu0Y2jtRpRxP/hqhTrgN2amjLSN0xGvg4Pi3QzdxOelxTCrMV8Bzxb4Y6ZB7wUZy6V/nairTYUPR7pS75UWObRWq/0TgiuFv5M+ngKuWuBzgeZwHtVo5ubLNI7fU54nf+qmcJabEWn+lX2WxBmn46+j1U9czB+QHUZbuRnjuP3vmrnPuAlze6QaQMjSZNKeyxorO5HD8kqEsmkR4/i97pq5wf4gAfVcfuwN3Ev6+qnE82vDWkAr5D/M5e1cwC/qnxTSGVxprAOcS/x6qaRcAuDW8NqQVvJH5Hr2puBLZsfFNIpXQ86WQV/X6rYm7HqYLVIRsBTxK/k1cxP8A3rurj5cDfiX/fVTGnNLEdpIb9ividu2pZBJzYzEaQKmJ9nDOgE1kGvKKJ7SCN6Ejid+yq5WEc5a96G0VaTyD6vVi13AmMb2I7SEOaiit/tTtXARs2sxGkCjsOHxVsd77Y1BaQhnA68TtzlXIuMLGpLSBV3964nHg7swSfClBBrwT6iN+Zq5JTgN6mtoBUH1sBdxD/Pq1KbgLGNLUFpH7jSfeSonfiKmQp8L7mml+qpbWBPxH/nq1KPt5U60v9vkD8zluFzAVe32TbS3U2HjiP+PduFTIf1wpQk7bDyTrakaeAlzbZ9pLSOgJnEP8erkIubLLtVWO9uIpXO/IYsEOTbS9phR7SapjR7+Uq5JDmml51dRzxO2vZ8yCwdbMNL2lQH8PByEVzL84NUBpRSztOBn6JK9EVcS+wT/9XScVdCTwOHEy6KqDmTSXd1r0suhDl68vE91TLnDuATZpudUmNOJY01W30+7ysmQ9Ma7bRVQ/TgAXE76Rlza3Aes02uqSmnIi3A4rknOabXHXgWt2t5x5g4+abXFILjsNOQJEc0HyTq8r2wjdUq3kAeEHzTS6pgPfjMavV/A1nJM1aNwcB9gA/Azbt4u+siieA/XDAn9Rt15Lmu98vupAS2gC4j9QRUM0dRXyPtIx5kjRhkqQ4LifcWv4OTGihvVUhE4GHiN8Zy5ZncaUtKQe9wFnEHxPKmI+00N6qkM8QvxOWLYtxEI2UkzHAb4k/NpQtTwFrtdDeqoC1gGeI3wnLlmNbaWxJHTUJuIr440PZ8qVWGlvl93nid76y5f+21NKSumEdYAbxx4kyZQGwWSuNrfKaCswmfucrU36M05BKudueNEYn+nhRppzWUkurtL5A/E5XpvwFGNdSS0vqtoOApcQfN8qSxThFcFY6OQ/A2sBP8ITWqPtJzxrPiS5EUkNmkN6vB0YXUhKjSCsF/ia6EHXeF4nvcZYlC4BdW2tmScG+TfwxpCxZiJPBVd46wHPE72xlyVGtNbOkDIzFJwOaySmtNbPK4kvE72RlyTdabGNJ+diUNGV39PGkDFmAi5pV1rqk+2LRO1kZcgXp04Ok8jsQWEb8caUM+VqLbazMnUT8zlWGPAZs0loTS8rUScQfW8qQucD6rTWxcjWedGKL3rlyzzJcXUyqol7gYuKPMWXI51tsY2Xq3cTvVGXIV1ttYEnZWw94hPjjTO55gvShURXxN+J3qtxzC+70UtW9Bugj/niTe1zzpCIOIH5nyj0LgJe02sCSSuUbxB9zcs+tOPV5JVxI/M6Ue97bcutKKpvxpBNc9HEn97jsecm9CB9/GSm/xZ6uVDe7kObAjz7+5JwLW25dZeFU4neinDML2KDl1pVUZv9G/DEo5/QB27bcugq1LjCf+J0o57yz1caVVHqjgRuIPw7lnFNbbl2F+jTxO0/OuQQv/Ut1txsuHTxc5gCTW25dtaTocsA9wBmkpX+1uvnAwcDT0YVICvUIsBawZ3QhmRoLPABcH12IGrc/8T3HnPPh1ptWUsVMBO4j/riUa65rvWkV4SfE7zS55lqKX2GRVC2vJf7YlHN2ab1p1U1rkya2id5hcsxSYKfWm1ZShZ1N/DEq13y7QLuqiz5A/M6Sa9yJJQ1lE9JqeNHHqRwzB1iz9aZVM4pcov42sFG7CqmQ54DDSG9wSVrVHNKjgftEF5KhscC9wI3RhWhouxDfU8w1HynQrpLqYQJp1Hv08SrHXFWgXdUF3yR+J8kxM4BxBdpVUn0cSfwxK9e8sEC7qkGtTFAzgRXPtOr5DgF+FV2EpFLoAS4D9o4uJEOfBb4QXUSbbEm6ar5VfzYhLRQ1pf/f55JuHT8F3N2fW/u/Zuefie8d5piLizSqpFralTQXfvTxK7fcUaRRg00G3gH8FHiY1tvgEeBHwNFkNEviL4nfOXJLH2mqT0lq1jnEH8NyTNnmBNgPOJfOPB4/n9ShOLBrr2YQa+DCP4Pll0UaVVKtbYvrBAyWrxZp1C7pAd5Cdxd7up70pFlvF17f83j5f/X0ATsWaVRJtXcm8cey3PIwec+m+lLgCuLa5wa6vLbEzzvwIsqeswu1qCTBdGAx8cez3JLjXAlrAKeTx9iNZcD/0oXJkyYB8wJfaI5ZCmxTpFElqd9pxB/Tcktus6ruRhqdH90uq+ZOYIcOvm4Oz+BF5pYfFGpRSVrhBcAi4o9rOeURAu51D+Fo8t4+8/tr7IifZvACc8pS0mU7SWqX7xJ/bMstexRq0fb4DHlc8h8pfcAn2v3iJ5Dmr45+cTnl54VaVJJW92LSfd3o41tO+Y9CLVrcycS3QbP5z3Y2wJszeEG5paujLyXVxvnEH99yym3FmrOQfxumrtzzuXY1wo8yeDE55YpizSlJQ9qL+GNcbolYG+CEAvXmkD7gXUUboRd4MoMXk1MOLdSikjS8yOfLc8xHizVn014DLGlT7ZFZTMG1Jl6awYvIKfeQz6hUSdX0RuKPdTnlsmLN2ZRtgGc69DoiMpMCi/d9OoMXkFNObLUhJalBvcB9xB/vcslSYJ1CLdqYtcnzOf+i+clgL7aR5YAvA17RwPfVwbOkpRznRRci6R82JK2qN5203OrGpKVWJwLjSJ/m5vR/HVhu9TYyXW51JZ8ifgR8To4AftbBnz8GuIg8Zx9sh4NIr69hk3F6ypXzzWYaT1JHjAfeBJxBuiXX6vv5EeDHpIFSLV8i7aANyHvimW7n1GLNOaJTM3iNncztpE5Ow96UQdE5ZadmGk9SW+1Gmn1zNu1/by8kze1xMI1dGe2Ws4k/7uWSewu25XA+mMHr60be30yjfCuDgnPJtc00nKS2OQj4I917r99MWvk0h5XoXk38sS+nbFmoNQd3EPVZjnkmMLrRhpmRQcG55LhGG01SW7wI+A1x7/k7gf07/ipHdivxx79ccnzBtlxV1Ub8N5K3NNIw0zMoNJfMoQvLLUoCYCzwFfJ4DrsP+D5pdHiUDxPfDrnknIJtubJ1SbcVol9Tt3NlI41zYgaF5pLvNNJgkgrbGvgr8e/5VTMT2L1zL3tYG1OfS9Qj5SnaMw/LWODPGbyeiPQBW4zUQD/JoNBcstdIjSWpsNeR96Jji4APdOzVD++SBmusQ3Yp2JYAp2fwOiIz4oqBMzMoMoc8SF6jgqUqOpY8Lvk3ku/Q5ONUbfDONtRdlRTthH0kg9cQnauHa6CNMygwl3xtuIaSVNhHiX+fN5s/0p2Z6QZMBuZ34HWUMYPOategg/F2ynLS/D6ThmqkwzIoMJe8dKhGklTYUaR7ktHv81ZyL7Bt+5tkSD/t0OsoW2a22H4vpjNzSJQ1+w41mGKPhpu02u4HrosuQqqoN5Jm8yvrLbYtSSOqD+zS7/tRl35P7jYnTcnejPWA35KmiFay+1AdAAe9JQM9bkntNZ00q18Ok+0UMYU0V8GIg6ra4CLSIEnBy5v43jGkxwendaaU0po+WAdgHLBztyvJ1E+jC5AqaDzpgFyVT2OjgC8Dp9HZwYGLSE8DCPZs4nu/SZpRUc83fbC/3IP4exM5pJPzTkt1dgrx7+9O5VJgavuaajVHZ/Aac8iwo9hX8vEMas019w3WYB/KoLAc8o3BGkdSITtT/VHYd5EmNOqEdal++zWSRaQrScM5BFiWQa255onBbgE0c2+lyi6MLkCqmF7S5diy3/cfydakT6idWEfgKRqcyrXixgLbD/Pv2wJn0p5ZA6tqwmCNs1vXy8jPQtJzvpLa5800d++2zKaSPkS8twM/+4IO/Mwy2nGIv9+ANOJ/chdrKaNxq3YAJpMesai7y0iTbkhqjx7gU9FFdNlo0pLqX6eJJVgb8Os2/qwy22mQvxsP/BLPY42Yu2oHYDvK+0xuO3n5X2qvg6jv00XvJz0quFabft6dwMNt+llltuoVgB7SNM11ucpU1HOrdgCGu6dSJ7+LLkCqmBOiCwh2AHAVQzx61QJvUaYOwMofWD8FvD2oljJ6xg7A6maSetiS2mMd4LXRRWRgG9LgwH3a8LP+0IafUXaTWbGs7aHAFwJrKaMZdgBW95foAqSKOYw0alupM3QRcFzBn+MVgGRH0q0lR/w37247AKu7IroAqWIOji4gM2NIswaeTOuPRM5kiIlcauYg4HyGWdlOQ7p95fsnGwCPRVWSke2B26KLkCpiFOnZ9XYNgKuai4EjSavUNet04Jj2lqMambbyFQA//cMzwB3RRUgVsjOe/IdzAOmq45Yt/L+XtbkW1cf9wAN2AJ7vKtLa5JLaY6jJWrTCtsA1wCub/P/+2oFaVA+XwvMHTdgBcIpNqd1eFF1ASaxLWunv3U38P3cBz3WmHFXc2fD8DkArl6CqxgGAUnt1alGcKhoLfBf4Ko0NDuwDru9oRaqivwN/gud3AOo+dWIfcF10EVLFbBhdQAl9FDgPWLOB7/U2gJr1Q/pvdQ90AHqBzcLKycN9wNzoIqSKmRJdQEm9nnRLctoI32cHQM1YyEpL3Q90ADbGiTpuji5AqiBXZGvd9qSrkq8a5nuu7VItqobvAo8O/MdAB6Dul/8BbokuQJJWMTBz4FFD/PuDpMeXpZHMB/5z5b8Y6ABM63op+fEKgNR+Lqtd3DjgB8ApDD7drWuXqBFfJHUY/8ErACvYAZDab150ARXyL8CvWP22yu0Btahc7gH+a9W/tAOQzMN5taVOeCK6gIp5HWkGwBes9HfOXqrhLAHeCSxa9R/sACS34QyAUifcG11ABe1Imjlwj/7/tgOg4XyaISa5swOQeJCSOsP3VmdsSFoS+K3YAdDQfgV8bah/HOgA1H0OgJnRBUgV5dM1nTMeOAs4DlgQXIvycxvwdmD5UN8wGpiAaynfH12AVFFXAEtJxxq1Xw/wqegilJ1ZwJsYYa2IXtJzpnU3M7oAqaLm4hM2UjctAQ4HZoz0jb3A2h0vJ38zowuQKux30QVINXICaXzIiLwCkEb/Pzjid0lq1U+jC5Bq4qvA9xr9ZjsA8AiDPB8pqW1uxslqpE67kCbHg3gLAB6KLkCqgdOjC5Aq7BbgSGBZM/9TL7BuR8opjyejC5Bq4HRgdnQRUgU9BRwKzGn2f+wFpra9nHKZFV2AVANzgFOji5AqZhHpcb+WJtzyCkDqPUnqvK/g+01qp/eT5tpoiYMAvQIgdcszwOeji5Aq4ksUHFvTC6zRnlpKyw6A1D3fBv4WXYRUcucBnyn6Q3qBccVrKTUvSUrds5S0gM386EKkkroJeAdtWMG2FxhbuJxyswMgddftwMeii5BK6DHgjaQptguzA9DCoxOSCvsW8IPoIqQSWUh63K9tM9d6C8BZAKUoxwEXRRchlcBy0vvl6nb+0F5gTDt/YAktiS5AqqklwBHAX6MLkTL3H8BZ7f6hXgHwCoAU6TlgH+Di6EKkTJ0LfLYTP9grALA4ugCp5uYBh5AOdJJWuIE2jfgfjFcAvAIg5WARcBhOFCQNeIw0zW/HHpn1KQCvAEi5WA6cRJonYGFsKVKohaSTf0dXq7UDYAdAys1PgP2Ax6MLkQIsB44Brun0L+rt9C+QpBZcCewG3BhdiNRl/w78uBu/qId0f2FCN35ZpiYCC6KLkDSoNYAfkQYJSlX3C+Bw0lWAjuvFS+B1vwUi5Wwu8E+kpYSlKrsBOIounfzBDgD4FISUu2XAJ4Fj8XilanqUNMd/VxfJsgPgFQCpLL4L7As8EV2I1EYLSCP+/97tX2wHwA6AVCZXAHuSVhSUym458G7g2ohf3osT4XgLQCqX+4A9gF9FFyIV9Fng7Khf7hUArwBIZTSHtDTq/0QXIrXox8AXIwuwAwBToguQ1JJlwAdJy6S6qqfK5HrSftu1Ef+DsQMA60QXIKmQ00mDA5+MLkRqwCMEjPgfjGMA7ABIVXA5sBdwV3Qh0jDmAQcDD0cXAqkD8Fx0EcHWjS5AUlvcA7wU+E10IdIgBkb83xRdyIBe4OnoIoJ5BUCqjjmky6sODlRu/g9wTnQRK+sFZkUXEcwOgFQtA4MDT8DBgcrDmcCXo4tYlR0AbwFIVXUa8DrgmehCVGtXkkb8Z8cOgB0AqcouJc0ceE90IaqlB0jzVWQ52N4xALBZdAGSOuou0syBv48uRLUyl7SMdbZrV3gFADbG6YClqnsaOAj4RnQhqoU+4G3AzdGFDMcOQGoDrwJI1bcU+ABpcODS4FpUbZ8ALoguYiR2AJItoguQ1DWnkSZjmR1diCrpB8DXootohB2AZFp0AZK66mJgd5w5UO11BekKUykMTAU8L7qQYF4BkOrnHtL0wX+OLkSVcD8Zj/gfTG//14dCq4g3LboASSFmAfsD34ouRKU2MANlqRakGugAPBBaRbzp0QVICrMUeB/wEdIsglIzlgFvAW6JLqRZdgCSbVnRFpLq6b9JgwOfjS5EpfIx4LfRRbTCDkAyCdgqughJ4S4C9ibdz5VG8j3g5OgiWjXQAZgZWUQmdoguQFIWbiUtK/yn4DqUt78A74kuogivAKzwkugCJGVjFnAg8P3gOpSn+4E3A4ujCynCDsAKXgGQtLLFwLuAfyVN7SoBPEea479UI/6HMzAfwPIaZ0bhVpRUVa8lDQ6MPk6Z2CwlDRStnBnEN25k+oA1C7eipKragTReKvpYZeLyASpk5Uff6n4boAfYNboISdm6GdgNuCy6EIX4LvD16CLaaeUOwL1hVeRjr+gCJGXtKdLgwLOiC1FX/R54b3QR7bZyB+C2sCryYQdA0kgWAu/AwYF1cR9ppr8l0YV00n7E31+JzmycEVBS416HgwOrnGeB7aiolU92t4ZVkY8ppGmBJakRvwVegWOoqmgp6Vn/yl4dX7kD8DjwRFQhGdk7ugBJpXIzsCdwTXQhaqsPApdGF9FJq17u9iqA4wAkNe9R4FXAmdGFqC2+Tg2WiLYDsLpXRBcgqZQWAUcDnyXdP1Y5XQx8OLqICMcRP+gih2xTtCEl1dphwDzij2WmDG7RUgAAEIlJREFUudwJrDXI9qwkrwAM7rXRBUgqtZ+Tbic+GF2IGvY08AbS02C1MFgHYHlEIZmxAyCpqJtIgwP/Gl2IRrQEOBy4J7qQaPcTfxkmOguBSUUbUpKAicA5xB/XzNA5bsitV2GDTXpjbxXGAftEFyGpEuYDRwKfxJkDc3Qy8J3oIiIM1gG4qutV5Omg6AIkVcZy4CukKWXnB9eiFS4CPh5dRE72IP5yTA65r2hDStIgdgceIf4YV/fcBkweYVvVzjhgAfEbJ4fsUrAtJWkwG5Nut0Yf4+qap4DpI26lihvsFsAi4IZuF5KpI6MLkFRJjwCvBs4NrqOOBkb8z4guJFdfI76HlkMeAHoKtqUkDaUHOIk0ODD6eFeXHN/IhqmzNxO/kXLJywq2pSSN5EjS4MDo413V89VGN0idbUT8hsol/12wLSWpEXuQFhWKPuZVNRcCoxreGjU3k/gNlkMeYvCxEpLUbpsA1xF/3KtabgOmNLEdamG4E9uVXasib5sCL48uQlItPEwaHHh+cB1V8gRwMPBsdCG5Ge5yyPqkRlPqQV4QXYSkWlhMmjp4AmlBIbVuEek8dkt0IWWzBfGXbXLJXJwwQlL3vQXnZSmSY5tvcg2YQfwGzCU+OiIpwp7AY8QfA8uWL7XS2Frhm8RvxFziIkmSomxKmqAt+jhYlvwGR/wX9kbiN2ROcWpgSVHWAM4j/jiYe27FW7ZtsSZpQEr0Bs0l3yrWnJJUyMDMgdHHwlzzGPCCVhtXq/sz8Rs1l8wGJhVrTkkq7BjSCPfoY2JOWUCaTEkNamSCm4s7XkV5TAHeGV2EpNr7LrAv6Rl3pQ7AccDV0YVUzW7E9+xyyn04uERSHrYkzXIXfVyMzheKNqQG1ws8TvwGzilvLtSiktQ+a5ImKos+LkblFzhde0edSfxGzilOkywpJ6OA/0f8sbHbuR7HZXXcocRv6NziFJ2ScnMs9Xly61Fgs/Y0m4YznrSQQvQGzynnFmpRSeqMvUmDA6OPkZ3MAuBl7Wowjexs4jd6TlkGbF2oRSWpM14I3EH8cbIT6QOObF9TqRGHEb/hc8uZhVpUkjpnTeDXxB8n252T2thGatBE0qp40Rs/pywDXlKkUSWpg0YBXyb+WNmu/Jw0G6IC/Iz4HSC3nFOoRSWp804ElhB/vCySy4AJ7W4YNe5I4neC3NIH7FSkUSWpC/YHnib+mNlKbgKmtr9J1Iw1gPnE7wy55fwijSpJXfIi4G7ij5nN5DZg3U40hpr3C+J3iBzjIymSymAqcCnxx8xGcjmwXmeaQa3wNsDgubRIo0pSF40BTibdwow+dg6V7wFjO9UAas14ynsfqdN5U4F2laRuezNpmfPoY+fKmQO8t5MvWsV8g/idJMfcC4wr0K6S1G0bkc8TXpeTJjFSxnYmfkfJNR8v0K6SFOVQ4E5ijpv3Ae/AVf1K4wbiT7Y55llggwLtKklRRgFHA3fRnePlA8D78F5/6byP+JNtrjm9QLtKUrQeYD/SRGftfvR7MelpstfiJ/7SmkpakSn6ZJtjlgG7tt60kpSNSaTbA6eTnslfRvPHxHuBU0mDDtfqbvkaStE5lX8EvLUdhVTQDaS5AZZGFyJJbTQF2B7YEphG+jA4qT/zgGdII/kfBm4njSt4LqJQddZ+xH/azjkfa71pJUnKVw8wg/gTba6ZD0xvuXUlSeqQogMwlgNntKOQippAuu/l8pWSpMpZG5hL/KftnPPulltXkqSMfZv4k2zOeRrYsOXWlSQpU1vT2qMhdcqFeCtAkpSJUW36ObNIj7w5h/PQpgNPAn+NLkSSpHban/hP2blnAbBDqw0sSVKubiL+JJt7biUtqSxJUph23QIYsAh4Y5t/ZtWsD0wELo4uRJKkdhkHPEb8p+zc0wcc0GIbS5JUWLtXYloEfKvNP7OKeoAzgU2jC5EkqV3WIS38EP0puwy5inTVRJKkrmr3GABII93XAF7RgZ9dNZsC6wK/iS5EkqR2WIu0JGT0J+yy5JjWmlmSpNZ04goAwELSVYBXdujnV80BwEXAI9GFSJJU1FRgNvGfrsuSmaTbAZIkdVy7nwJY2TPAKR38+VWzOWkswMToQiRJKmoKaSW86E/XZco5dLZjJklSx8YADFhEmvb21R3+PVWyHenRwN9HFyJJUhFTSKsFRn+yLltObKWxJUlqRKevAEC6CjAG2LcLv6tKDiQtHTwjuhBJklo1AXiQ+E/VZctzwG4ttLckSdl4G/En1DLmGWDnFtpbkqQs9ACXE39CLWMeB17cfJNLkpSHPUhL4UafUMuYh4Atmm9ySZLy8BPiT6ZlzQxg4+abXJKkeJuTVgyMPpmWNbcB6zfd6pIkZeCLxJ9Iy5w7SUsJS5JUKmuQVr6LPpGWOTOBrZpsd0mSwr2b+JNo2fMQ8KJmG16SpEi9wF+IP4mWPY8DOzbZ9pIkhdqWNFVw9Em07JkFvKzJtpck1Vg31gIYzpOkdQJeFVxH2U0A3g7cQ3pKQJKk7I0lnbSiP0VXIX3AJ5prfkmS4rwCZwhsZ04h/uqOJEkNOY34E2eVch4wsaktIElSgLWAR4k/cVYp1wIbNbMRJEmKcATxJ82q5Qlg32Y2giRJES4g/qRZtSwG/qWZjSBJUretDzxG/EmzivkxMKnxTSFJUne9kfiTZVVzB7BN45tCkqTuOpX4k2VV8wxpvIUkSdmZRFr2NvpkWeWcQ3r6QpKkrOxKGsAWfaKscu4H9m50g0iSqiH32eIe7f+6T2gV1bYWcBTpisufSTMySpIUbhRwOfGflOuQy4EXNrZZJEnqvC2AZ4k/QdYhC4CTSIs0SZIU7u3EnxzrlBtJYzAkSQr3LeJPjHXKEtLKgms0snEkSeqUscDVxJ8Y65YZwOsa2D6SJHXMRsAjxJ8U65hLgO1H3kSSJHXGPqTL09EnxDpmCWmWxnVH3EqSpGzlPg/AUGaSJgjaP7iOOuolDQ48FlgEXI9zB0iSuqgHOJf4T8R1zy3Aof3bQ5KkrlgDuI34k6CBm4HDsSMgSeqS7YA5xJ8ATcpVwGuG3WKSJLXJIcBS4k9+ZkX+DOw33EaTJKkdTiD+pGdWz02kxYbGDL3pJEkq5hTiT3hm8DxKWmNg6lAbT5KkVo0Czif+ZGeGzmzgP4Fpg29CSZJaMwGnCy5DlpFmFjyqf5tJklTYhqTJgqJPcqaxPE2aXdBphiVJhW1PutwcfXIzjacP+BNwDLD2altUkqQGvZo0XW30ic00n6XA5cAHcd0BSVIL3k663xx9QjOtZyFpcOdbgclIktSgd5EuL0efyEzxLAWuIz1SuCtOPSxJGsGHiT95mfbnYeB04DBgLSRJDanbp6fPkT45qrruA64gjR+4grRYlCRpFXXrAECahOZj0UWoax4mdQauBG4gLV/8bGhFkpSBOnYAeoBvACdGF6Iwj5KuDNwOXN//51tJT4xIUi3UsQMA6XV/h/S8uQSwBHiI1Dl4hHQrYeXMJA0klaRKqGsHANK6AWeTBo9JI1kKzFolT62UOf3f9xzpsdOlK/3dPNLVhdnAXNLMh0u7VbgkDabOHQBIS9SeBRwRXYhqZTFwL3AncDPwR9L6Fd6CkKQuGgWcQfzjbKbemQ/8GngLLo4kSV3TA3yd+JOAMctJtwq+DmyOJHXIqOgCMnIh6ZPX3tGFqPbGA7sD7wO2AG7ERxcltZkdgOe7lDTv/P7RhUik9+fOwAnAWOAq0gBDSVKH/CuuHWDyy62kZa4lqTCvAAzuatKz328AeoNrkQasD7yb9CjhNcG1SCo5OwBDuxm4h9QJGB1cizRgNHAQsB7wO9KVAUlSB7wceIL4y7/GrJpzSQMGJalpdZ8IqFEvAn4DbBVdiLSKXwOH4syCkprk/e3G3AW8DPhLdCHSKl4PfB8785Ka5BiAxi0grR2wNbBdcC3SynYgdeb/GF2IpPKwA9CcpcDP+//86sA6pFW9gvRkwL3RhUgqBy8btu544Jv4hIDy8QRp4qBHoguRlD+vALTueuBa4GBcvEV5mESaOvic6EIk5c8rAMW9gHRb4KXRhUj9Xk96akWShmQHoD0mAt8G3hFdiATMALYFlkQXIilf3gJojyXAL4FHgQOxXRVrbdJU1jdFFyIpX14BaL9dgV/gWu6KNQPYBlcPlDQEJwJqv+tJa7n7TLYiTQcOiS5CUr68VN0Z84CzSPO1vwqvtCjGOOCn0UVIypMnps47BDidtHqb1E2LgY2BWdGFSMqPtwA67wLSVK0XRhei2hkLvCm6CEl5sgPQHY+RJgw6gXR7QOqWfaMLkJQnbwF03zbAj4BdogtRLTwObEQajyJJ/+AVgO67E9gT+ArQF1yLqm8DYKvoIiTlxw5AjMXAJ4G9SRO2SJ20TXQBkvJjByDWVaSJg87AS7TqHDsAklZjByDebOAY0mCtu4NrUTVNjy5AUn7sAOTjT8COwOeBRbGlqGLWii5AUn7sAORlIXASsBvp9oDUDmtGFyApP3YA8nQraYDg+4HngmtR+dkBkLQaOwD56gO+SRrA9fPgWlRui6MLkJQfOwD5exQ4HHgNcEtwLSqnOdEFSMqPHYDyuJQ0e+AJwBPBtahc7ABIWo0dgHJZCpxGui1wMl7aVWMeiy5AUn7sAJTTM8CHge2BnwXXovzdGV2ApPzYASi3e4AjSJMI3RRci/J1V3QBkqTOGQUcDcwgTStszHLSbaMpSJIqr5f01MDdxJ98THyuQZIG4S2A6ukjjQvYjhVXBFRff4guQJIUYwxwHDCT+E+jpvt5FZKkWhsDHIVjBOqUB/Aqn6QheHCojyXAD4EXk54cuDq2HHXBWaRbQpIkPc+rgfOBZcR/WjXtzVJgKyRJGsZWwCnAXOJPXKY9ORNJkho0Gfgg8CDxJzDTevpIs0RKktSUMcBbSAsQeXugfPnu6ptUkqTmbAp8AriP+BObGTlPA+sNuiUlSWpBL3Ag8FNgIfEnOjN4jhtqA0qSVNRawPHADcSf8MyKXAD0DLPdJElqm52AL5JWnIs+AdY595I6ZpIkdd0OwBeAO4g/IdYps/vbXpKkcNsBJwHXEX+CrHIWAfs3tkkkSequbYFPA5eRpiSOPmlWJQuAQ5rYDpIkhZlE+sT6ZeA24k+iZc0c4DVNtr0kSdmYDpwInAc8R/yJtQy5F+/5SyrIR4aUkzHAHsDewJ79f3ZSm+c7FziGNPBPkqTK2ho4Cvhf4G+kVe6iP4FHZBZO8iOpjbwCoLJZE3gZ8HJgZ+AlwBakmQqrqA/4PvBJ4MnYUiRViR0AVcFY4IWkpw22A3bt//MWlHcf7wN+C3wWuDG4FkkVVNaDo9SIqaRlcbcDpvVn8/5sFFbV8B4EzgLOIA32k6SOsAOguhoPvIAVHYJp/V83BdYG1un/OqHDdSwDrgf+APwO+Avp078kdZQdAGl4E3l+h2AdYN3+P0/u/541SE8w9LBiPv6xpDkP6P86D5jbn0eAu4E7gVuBZzv9IiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJklRl/x+OD5hujx75IwAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
              </div>
            </button>
            <button
              class="font-poppins font-semibold px-9 py-4 border-[1.5px] w-[230px] h-[56px] border-[#0C0D0D] rounded-[8px] bg-[#FE892A] hover:bg-[#D6711F] duration-300 text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] mobile:w-full"
            >
              <div class="flex align-middle justify-center gap-2">
                Share
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <mask
                    id="mask0_2114_2384"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect
                      width="20"
                      height="20"
                      fill="url(#pattern0_2114_2384)"
                    />
                  </mask>
                  <g mask="url(#mask0_2114_2384)">
                    <rect x="-17" y="-6" width="64" height="31" fill="white" />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_2114_2384"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_2114_2384"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_2114_2384"
                      width="512"
                      height="512"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
