import utilService from '../../../services/util-service.js'
const STORAGE_KEY = 'KeepApp'



export default {
    getNotes,
    emptyNote,
    addNote,
    emptyTodo
}

var gNotes = [{
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'buy a new car ',
            body: 'asdasd',
        },
        color: '#ff5555',
        order: 0
    }, {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'buy a new car ',
            body: 'asdasd',
        },
        color: '#ff5587',
        order: 0
    }, {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: 'buy a new car ',
            body: 'asdasd',
        },
        color: '#ff5531',
        order: 0
    },
    {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'todo',
        data: {
            headline: 'fsefef',
            todos: [{
                    num: 1,
                    done: true,
                    text: 'ewfewfwefe'
                },
                {
                    num: 1,
                    done: false,
                    text: 'ewfewfwefe'
                },
                {
                    num: 1,
                    done: false,
                    text: 'ewfewfwefe'
                },
                {
                    num: 1,
                    done: true,
                    text: 'ewfewfwefe'
                },
                {
                    num: 1,
                    done: false,
                    text: 'ewfewfwefe'
                },
            ]
        },
        color: '#ff9555',
        order: false,
        numOfTodos: 1

    },

    [{
        "id": "cjr",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 49,
            "sec": 18,
            "weekDay": "Sunday"
        },
        "type": "audioCmp",
        "text": {
            "headline": "",
            "body": "audioCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    }, {
        "id": "Eln",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 48,
            "sec": 40,
            "weekDay": "Sunday"
        },
        "type": "audioCmp",
        "text": {
            "headline": "",
            "body": "audioCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    }, {
        "id": "s31",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 48,
            "sec": 37,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "ewfewf",
            "body": "wefewfewf"
        },
        "color": null,
        "order": false
    }, {
        "id": "Hat",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 40,
            "sec": 10,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "https://www.youtube.com/watch?v=Ov15GetL9eo"
    }, {
        "id": "Hat",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 40,
            "sec": 10,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#00ffff",
        "order": true,
        "url": "https://www.youtube.com/watch?v=Ov15GetL9eo"
    }, {
        "id": "b9B",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 39,
            "sec": 46,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#ff8040",
        "order": false,
        "url": "https://www.youtube.com/watch?v=BIzj50A0tZI&t=2538s"
    }, {
        "id": "IIB",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 39,
            "sec": 28,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#ff0000",
        "order": false,
        "url": "data:image/jpeg;base64,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... (10024 total length)"
    }, {
        "id": "Lxs",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 39,
            "sec": 14,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#808000",
        "order": false,
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWH2lHsSm96ojSd1hFwD3rEotJaTuw9rKzgR-gQlkVBc6dr9Srw&s"
    }, {
        "id": "YYy",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 38,
            "sec": 38,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#ffff80",
        "order": false,
        "url": "data:image/jpeg;base64,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"
    }, {
        "id": "K99",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 9,
            "sec": 59,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "aaa",
            "body": "aaaaa"
        },
        "color": "#ff80ff",
        "order": false
    }, {
        "id": "nLE",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 9,
            "sec": 16,
            "weekDay": "Sunday"
        },
        "type": "todo",
        "data": {
            "headline": "shopping",
            "todos": [{
                "num": 1,
                "done": false,
                "text": "a"
            }, {
                "num": null,
                "done": true,
                "text": "b"
            }, {
                "num": null,
                "done": true,
                "text": "c"
            }, {
                "num": null,
                "done": true,
                "text": "d"
            }, {
                "num": null,
                "done": false,
                "text": ""
            }]
        },
        "color": "#ff80ff",
        "order": true,
        "numOfTodos": 1
    }, {
        "id": "nJr",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 8,
            "sec": 56,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#ff0080",
        "order": false,
        "url": "https://www.youtube.com/watch?v=HbNX6Lh0xuw"
    }, {
        "id": "F0O",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 8,
            "sec": 22,
            "weekDay": "Sunday"
        },
        "type": "videoCmp",
        "text": {
            "headline": "",
            "body": "videoCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "https://www.youtube.com/watch?v=x-U9ZCRVT7E"
    }, {
        "id": "KpP",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 8,
            "sec": 12,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#ffffff",
        "order": true,
        "url": "data:image/jpeg;base64,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... (10024 total length)"
    }, {
        "id": "Bdf",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 7,
            "sec": 59,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": "#ffffff",
        "order": false,
        "url": "data:image/jpeg;base64,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... (10024 total length)"
    }, {
        "id": "HP4",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 7,
            "sec": 34,
            "weekDay": "Sunday"
        },
        "type": "imageCmp",
        "text": {
            "headline": "",
            "body": "imageCmp"
        },
        "color": null,
        "order": false,
        "url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFhUVFRUVEhUWFRAQFRUVFRUWFhUSFRYYHSggGBolHhUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGyslHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK//AABEIALcBFAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwEGB//EADsQAAEDAwMCBAQFAgUDBQAAAAEAAhEDITEEEkEFUSJhcYETkaHwBjJCsdHB4RQjUmLxcoLSFTOSorL/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAKxEAAgICAgICAQMDBQAAAAAAAAECEQMhBBIxQRNRYRQiMiNx0QVCgZHx/9oADAMBAAIRAxEAPwDwfTWlPGtMIPp1JOG07L6fHGkfLcjJcgPe5Qko1tFaCgjEd0J3hy5sJTh+nWLtOsoJZULRSXXUkxFBd/wyzqb8ohrUiFmwJ1W0yCfpYKFwHwypo5RpIkUlKARUI0hU5OwX4Sgoogqm5aD2ZQysH0yiwoWrGaptFtJXAyjnawQlLqagpruxzphdTqV7KDqCH+CqmkusxdTtfqJNghAXTKJfSAaXdhK8xruqPefhloYWEzBzHN/a3mlTyU1ZXx8Ly/x8ez0bupsaIJk9h/PCBq9anDAPWT94SIEwfYjAgceuR9FcjPEe/wB5TU7L4cLFH1Y0pdRE3AA8j6cH7snmjcHNkGQcFeNf7CeJx/a5+qJ0esfSdLCQJbIIsZAkR9crFoDPw4yX7NM9cKasWrHp2vbWbuFj+pvY/wAIpzgmUePKMoypi/VU1XTtW9dyybZYxieqNKt0BqKaNc9YvCx7Ng2hU/TrJmmumbmqrWJbgrKFlaQH/h1EbCi3ojPkYV08JxTNkhpVdqLGtCJeCTJBt2NAVuxKqOolMaLrIiecWjUhU2rQLoCyxdmbaa0FNaNC0AXGNglSghKlEJnUKWayrC0ZBtsDqgBYiuh9VqkGK6ByRfHE2tjJ1ZdpulLBUlMdGFqdnSh1QYymtPhqxqNY0veYaBJK83rPxC9zvB4WfU8Sf4WpWxeHBkzP9vj7H7qauxi8yNW52efkiqeqIgyZ7+/Kb8P5K3/p7r+Q9LUm1vW2tJDG7otMwPbuhepdTc8bQYFwY5xny/hLGtEn6DN+J++UKhXkZx+BW8mxjU6rVeCzwAGAYD8Oukb27qrie8Sc2AE/RHlkCbG0kDgmQB5Idmmtm/3dA8fd+D0McI41UVRemSf1GCQHSSJGRJ9vZWewuG9xMnvfdEAieDdWpUwbQXEgiwJM8WH3dE0dGYHxCA0TDZuJz9bpqhQVgNsxeLz3nI72jssywx9kYv7orY0Zk/8A1+8hQayI2taMHE47zkWXOK9mnem1HscDBg54kf22p1/jSUkZqXOsJJAJt25McKDVO7nmJv7pcvwS5uMsjv2O/jSp8VLKGsBMGx44twimuSrZBPC4OmFb1QuVQ5cJRWBR1xVC+FxxWFRyFsOMbNDUUQsqIewzoENqqSsqQWu1d2MaSDtC5PtM6y81p3QnWkqpsWRZ4+xq1XCpTMhXWkLLBXBWJdC4aq4yjtcJL1JpgwnG+ULqWArRuOXVnj3MM3VC0p1qdOJlDOoJDiepHMmgCnKaaN6wFBb06UIoKgcklJCbq2tfUcQT4R+VvHqfO31QjW5NoEWnuMhE6uj43DBHGD7dx6IcWdfj9xwq0kj1sSSglEJos+UTM4Hc/wALeraw77T58yD2wu0WECTPiAMeU58ryrBnBA7zcGwiOy1yDBmstcXJzI7XEdrhasojFxbyyc3Rmn03oMC9yfQLtQ0RYkn08K7rfk6xbWIdIb8vNU0+mLzAsOT95PkmDH0uGfU/UlXpVWYayP1EguGAT3+5RNaOsr8dlMRTFyCHO5OIvxGUK6qXEzwDOLgSRPcoqppWkEh0ANLvFF5IAE2J5zOEJUi0TO2/YETEe0fNAcjEUwS2XR/qsTH+70wFkxpxtmJEYjJIn2J9lu8tFvSeZM+vr8lkTb3vf3wgabNKtpGAb+IOAjmBgzxhZ0mbnAD6kAWEm5Vw4zIJnHb9vvKq9oiOTEcER9j5JbgzSj612kcBvEXAiLfvlF6TXAw104Hi7yQB++fJDbiD4f0kuEwSMZ4OEPVNvSOfSwQSi0DOCmqZ6RrVZZdKqF9OTkHaf6H5Leo1YePNdZOLB6pQjjKKcJUbRWVYyLSMGsXUa2ioi6A/IUFOF0BcZVWwCFIFtryU2ovSVIWIartYiQuVNUO6FVGNekdCpCOZqLJhFOBvqKkJedTdTU10JTErGHCGtjOjqFeo9BMatCV1mOOzOq2Vn8JbtWzWLqN7UBCitBSQvWOrsoeEeJ+dvae5XmqnW6zjO6PIBtvSy7RZh4mTKu3hHrX6VrrkAkYNjCTdY0oaWloEzjv5wgtPq35+I647k47rWpVkhzQZbcOcZx5GxT4wrdlmHizxzvtoOpi0zeL8C0kW7WVGVGSBM+R+QicoHVV5JDTDexP2O642jA4FruOBBmQUdFpzUFxcQDEOgTwu0qBm97EfORPzVG6huWm054kcgcqzasjsCRcm98+3OFiaZo0p6Wll7uLtbP6R+aeJW3x6DY/ygQQ7mJ9T6/slleznbSYuGw4GcXsBb2UZSsRYkgGSYgAkkeuEVA+g8aiiRGz3lwKEr6cExTedmDaTMAkefGUMKB8wZVm0XcH79V3VBGzNHTGS4+8fJWdoKJ/U9ve7XAcc55Qrqzxz/BPYqprkZFpiQInlY0jg6h0emSAapg9mifbxIfVdKcBLHh45EQ4T5KzageJDoMgxiZ9PQfNZ/FIaCHXkyLy2I28eXdA0dYteODaL4M+iyrttYzYT/wBXI/umWoqh1nCTw7kR9/RCdQoBpECLAGYncPzY4SprQXsafhaoSKjZMAtMcT4pMfJNK1NAfhOl/l1HcFwA9QL/AP6TDUVYSfR4vJf9eVAVVsLlNyy1GoCHZqLoVJWGoNocNUQzKtlE3sI6MXaOrKbUSvPaV0JpT1EBJg9FebHvQyBVw8JX/ilcV0xMmeJh76yHOqKFqViuUWkrLCWJJbD2PJR1FiG0tJMqVNMRNkkl4KKryiHMQ1YLhS2VbUU1uvFKmX5OGjueEq1dctSnXat1QjsAti7dFuDi/JJX4Aa0vcXOMuJkn1XGU0dodAXkWIaRO6IBgxacheh0vTKNJpfG83ALgS2YsBa1+UfRJWez2S0KKFNrQC9p3Zi9reFpHecyRhc+GHAZmPFOMmIviD9FfUgmZAJJcdwIkmckCwyeOVzGBx68X/n3RxlaOom2LmB7gT7JT1Ku53k0YEzPmUa8Tc3i5vb7ulVcOebYCVnk3GkFFBGnEAc/05lGQTkiwtiT2HF0GOlVgPD4vIZ9pQ401bdtLXSeClKcoa6s20/Y1/xTGgEkdoEE28lo3rAi1Mk9yYtjzQ1DpQaPHaMxc+/ZH0mMaPyjb3cZ9M4Cpj8j29AugSv12oJikwR33H34Wel/EZJh1IEd25EDzsURqOtUBYUg+OSAR7FyGZrqTpLGBp9Ggqe28n7cn/AXrwNW1mPFreRt/wAoXUUb2uhH1z3KuaxmHZIBGbTgAcSIVfZAnHT/AE9BN4+a1fUDh7Q6+SCYJELlNzXWJIPeSZPby5WT6T2mYsJ8QM47xj3SpbNI8xj25EE4lVfTBFzxxxeL/fKqD5H+JU7gj9jg5n2Qs49D0Ss1tLZIJaTJ7zeR+3sg+qamEqpVyIM+v/CG6jqSfdTZ30haIv0n9Vy+zlfWKabUSUsc9E6I3XlQzuUyyWJKJ6qgZAUVdJU8IUXqJnkyuxUbLnxii6tNDildC0yxST2XoNJTCnSKz0zEfTamxjonyTM6enRVGitabVqGo0iOeRmlFsIphQ7Vu1ESyNwsKrFqwqzhK4BOjz3U6EgpTptFuM5AcWls7T+WW8L0+vYA0k8JMdTTBmCG7gTBBI8ONwN5M2TMcd2ezwZOUWFUqopCAXAbfDYXviJs2QVlX14cXNebOMjbZpdaw7JcdV/3Xu0gmwsD5fm4S3V1jj+6bOSSPQUR4xpvFhyccz7/ANlyqwu3QJayA4ziTkXvYG/ZY6JrhTbTBG50zLg2P9pnHCxDzBiQdpiDnvN+QSPQY5S3K1o0E1uoJfsAE/qGAP4ymOn0c7SWxLQQf9X+718kr0dKahcXQSDkkbpjkeo+S9V0fTt2+KkHctcYIGQTf9xOSuw3tyOk0ginpzE+QAEAgAegCU63UhriW2vkeKMYlMurVG023b4zh8mzRYxGBfC8xW1TWyXDc44ANxPJ9AmymkrYMUbarUhm1xO4kflvIMmWm3ok2t1L6v5jbgDAtC32mo4mLk4/vhHaLpb6gdsa07YmXBvewPspMkZ5lV0hiqImoN3W5481WpRIuEyq6BwO5tiJJwMZCuynuAkQSLi9jKQuL/tl59MLsK26s8/NE0dVkyflPM+2FTVaf790uMgwpcs8uF1LaCSTHWn1U2PneL3gEeYgI6hqCDP3leeo1ITWk7wyT4piJAgQTMZVfGzdkDJUF16QjczGSOR6eVkG5GMqfqFsggcE3E+X/ihNXAPkYPpPCqlJUCjJ+Pf3t/S6yic4UDpXSUh1IIW1GwSFrpnwVbWsvPdDtMLwskfiytB+Uel01fwqJXS1NlFcs6oieDY4quWQK65yqCrRSWgui5H0XJVTei6FVEmJyRHFFEBqF0rkamHnT8kAWrVRq0auFNmjVo1UaFsxq4Wzzv4q1W3ZTEEmXGfKw/qvMurTFgIEW5uTJ+aafidjn6vYM7RH/wASf5SNpRqWj6PhwUcMf7WbmqQIHBkHz+wq6WnLtzsNv6uz/dZ1nifCe+c+UonT/kzeTaDfJmfkIXXbKg0wQOHCXTIO4OAgBsZHr3ssq7STuwMAAmxgNuMzAHzV6NMNLgXAgtbdsG5uATNuQb54stqlNpgCwANyZnsPI4EI4Rt2wRbp6M1YE8GQC4gAGZA9vReu0NRtOlvedrQNxJxAMHi/aF5vpRZ8ctduu0wWhrrxABBtGb/8oP8AEfUC6KTfyMzxuPc+XYJWXL8cJNGV2lRbq3XzXf8A5YjhpMGw8u6Cp6d2SDcm+ATyB3ysum6YukiZbBECb8T2E/svXUunuDvjVSxoAlxhoZBEen2FNx1LKu+R/wCBkmo6Qt0WjmPYx3j/AJ+qat6fMkSBfnjgEodnWKNOG02uqEAx+lvtz9AtX6SvqB43tAifhtIBaMgubn5q+M16Adgut6hRpiGj4h7Aw3yl38JFQqObUL3gjeSRNgL5vkWIXqqH4bHqLeXb+6R/iWkxpFFpl1nPP5i2xhnkbzHopOVF13va8L8hQa8GWqaJ++/9kprs8SZNd4GzkAybD0CH+HulyHMvmgvsKOgZtJEQIgWNzMkz2Ecf3WzKX36LVrS09iObHy91sOOoo5swp1CDb+qvqySGm3NpGCTc/IomppdrWOkEPBiDiDBBGRxkDy5WWsmGyQYJDY7DPGJM+6KcWlVmJ2DNCjiugKpXeEaDajKGcEZXomN3dCOXh8m+7bCi7IHKKqinDHzHq8rAFWBXtqZA0a7lenWusZVJXOewetj/AEuqTOjWleUo1CnWiqYVGOdkOfDWx9SWzQh9M5GMTDzJeTrWoim1Va1cFWFgvyeP/HdGKjKgH5hBPm2Yj2K80xeu/G7S+mwjDXS73ELylAgET3EjuJuFy3I+k4MrwL8G5oNLC9rgCNoLSRucTMlo7Lu2ABe9wcW+/wBl3XuZvcabSGnEmfWFx2oLgJiwgeg4+pTdWVRsN0BLSHQDGA67ScYm+eFq57Q0zIdaA2NsZIPI4ss6VRrrtluxrWkbgdxJMlvzXHtkEx+US7zk2wLTYJsfBn9wbTf+4akkeEtHnKGdTG7c4xB3TIBBFx9UZp2l26ASG+JxEYwLepPz8kL1GiIIz6GQebe0JE4rq3VhJnX9ZcHuewh9RxJe9zWXLs2whtR1Nz3TXqPqeQIAHtj6IWtpSDj+iHNMgrycuXMvK/wMUYjb/wBcDBFGkGn/AFvIqO9hAAPzS+nrHh/xA9web7pId81hsUcxTyy5ZO2/ASSGNbquoqWdXef+4t/ZVZS+GRuyTefMWnuEFTa6fNMa2mIALjJkARcREzKr46c0507X2C/owqvvtHuUz0tEWBBDZAJgmJiR6xdLaemM/cpppqjoawnw7pAMRuMCSVdxlK25ICX4NH6duN4nxyHAtA2/lv3N7LENMTFpiYtOY+oR1cA7B4W7gSXP25EggFsw3GUudUVcgYl4gTifeSP2yPkhazrrSvU/1XMCCIjAj6IV7lNlmgkWJXG3MKjZOF0tIUmTNRr0M6lK0eSUavTxcJhpdTNiu6pqVkhHLGyeEpQlsRKIh9G6i834pFfZDCVYFZqbl6PYlo2ldDVkwrcI47AeizQj9NVhAhaByanQmas9Jo9RKc6UyvG6DUQ6CvV6GqIVEZdkeXycXVjJ5gJVrK8I2tXBC811fUGYWvSFYMfaVFNfqy5pb3BC8y2xvwm5KB1LATI90CnvZ7XGqH7SM027BB8JdmPZDUzcA2ki/Za6xkOO3HByhKpj1TMk0t/RZHY50WnkVC1wO2DFr37z2BuJWVd42nJtMiwFxfz/ALpPRrQRJgTf+UxZWyJN2xbk+6LFnU40jXFo36W9u47i6IjwgE33QIwbwqVzObkm/JsAOfuyy0LoLhkmBic9uxRApbi6IG0F1y1phvqbujgI4P8AaYylAfE3AmXN7nLcC5vOEJqtNNu2Fas4sc17Z3D5EdiihrKb7yGnlruPQ8pb6SuE/wD0LfoUEAHa6x78FdNId0yfoDVPhh3eCLfws6WnaG/lwfzDP/TH9Un9M79V9ndylGiTFpdMRBkxefot3t3HyGB65VqJLXBzHQYJJBILZkFs94P1WumbyqoQ9A2DvbBHktNOQCdzdwhwAnbBIO0+xuqO8T4BHa5ge5RJDCW7AR4Rukgy/wDURHCL2czLXOIa2ALSMAHxCSSeUtcx54TTqLdoY0ggnxXEW/SR35+SBqVfLj6pOZJt2wkYBpGV2hpi4ybBbaQy6TgfXyKK33UU+r8MXkyNaRVtAAWWVWmi5WdQIJRQhSdix4grRtebFSuEI4qWUnB6KUuyCS1RYtrqIvkj9m0w0hUhblqrCY0JsjQtAVWFAiToF7NQuF6pKrKJyMo1FRN+ndSOEka2SvTdI0LYnlOwdm9E/I6qOw5r3OCRdUaQ5eop0oS7qfTt6qnG0QYcsYy34PN1SYWI07jhejp9LGEwo6BoGFO8Dk9lT5cY+Dzel6XUcI47JlR/DbT+YJ2wtblCa7rQZgynKMYrYn9TlnKonaX4YoAXYCvOdY0AoVHGSGkj4YaJkH8wn9JA7oyp+KXG0LjNPU1AJ3EGCR8lkZxb/aVYpZIO5vR5ulULXSMGx9Cmz4IADWtLWwSCfFE3vyfJJtdp3McWPEEfdlv03qDbMcAIs1wtN5h37BZjzxjPpI9KrVoLfRJDjGBfFuAllXS8p0KAIkuveG/q8ndo4RrNG5nhqB1NrgJMA7hmw5hU5MMci2Yp0KtN0qr8L4gb4Q2945OByu0nWuAbHN88jzTH/BOaHU2VntY7uCJEZLfNL31621zCacBoa2WjdG6fD2K5LotIy2zmqqTAgAgBtgGjaMTHObrlSvtb58QsaVOAXGe8+fn81kfEcWnKxydfkJKjunFwSJEyR/qMzBRjKwDi4iANxIBIjNgcrBryAGzad2bDjClPRuqtIBtN/b/lC5dI68gykluQBqNc57tziTYASZhow0eS7p6Zef8Abz6J1pOgNbd5V+ohrW7WCAoOmSrmxT5UW+sBZXqDAEBZtesiuSp3PYaiqDRUXDUQgqKpqrvkM6Fq7kG8rWo5YkKXJK2PgqKKKQokDD0TqazLEQsXFexJI82LZXYqkLYKrkLRqZkuLjiqElLsYkXaJNl6Pp+5rRCT9O0xJkr09CjtHkq+PH2RcrIvAbp3khafDQA17WmEW/WAjKtPMlCSfgs2kuVaoaMoapqwBYhItfWe4m9kqc1Ebjwub2Ga7XTMLzuqcXFaue4mEw0vTyVHJvI6PQgo4UC6Hp85THUa00G2TClpxTEleb6/rQ8wE5r4sd+wYSeae/Ar1+rNVxLj6IEshEbV00pXmu5O5eT1YNRVFG6x4EB37FEU+t1wQTUc8C0PJdbsJuENUYB3lYwtlPLFqpP/ALGKmehd+J907qRHAh7nwOw3KUur0CTva+NpjbE74tN8LzsLrWp0ednWnszpE31Goc43PsMBNNL1rZpjQNMOm4diOZ8yl+l089sTddIEo4vJG8je2DLq/JodSXxDYjJ/hN9BXgQlDSOERRqQujmk3cmTZl3VD11eyXau6jayo9ydKdolhDqwKpTQtQo+qgqoUOVFsGYblwuXHKqjch6QVoqG8gL1+m/DTdsxleQ6XqNlQE4X1Dp1YOYCDwvV4MYShdbPO52ScGq8CAfhlnZRehe66it+OH0Q/qMn2eDLliXKKKCbPRiT4iq56iiW5MOkZNMmF6zpfTWFokKKKviJNOyXnScYqhf1R5ZUa1g5+id0q0sAK6onY/5MmzJdIirVaO8ysXNd3UURyRsJtoGfu7rlNpcYBUUUslsovVjPTaAC5TLTt7LqifGKRBObl5F34i1sNgLyDnKKKPlSfej1eJFLHo5Ks0qKKYqYQ2DlUfpmHiFFE3yLtrwZjSN8114bEQoolvXgO2/Zk5yzL1FFPKTGJF2OWzHqKJkGBJBDXq+9RRUpiWij3IWqoogkHAFeFmVFFDJbKUVXsPwr1UxsKiiq4M2slIRy4KWN2eodJuooovbPBP/Z"
    }, {
        "id": "5bJ",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 19,
            "min": 7,
            "sec": 21,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "buy a new car ",
            "body": "asdasd"
        },
        "color": null,
        "order": false
    }, {
        "id": "OK2",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 18,
            "min": 43,
            "sec": 24,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "buy a new car ",
            "body": "asdasd"
        },
        "color": "#ff5555",
        "order": 0
    }, {
        "id": "Pui",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 18,
            "min": 43,
            "sec": 24,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "buy a new car ",
            "body": "asdasd"
        },
        "color": "#ff5587",
        "order": 0
    }, {
        "id": "4sT",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 18,
            "min": 43,
            "sec": 24,
            "weekDay": "Sunday"
        },
        "type": "textComp",
        "text": {
            "headline": "buy a new car ",
            "body": "asdasd"
        },
        "color": "#ff5531",
        "order": 0
    }, {
        "id": "EIF",
        "date": {
            "year": 2019,
            "month": 10,
            "dateDay": 10,
            "hour": 18,
            "min": 43,
            "sec": 24,
            "weekDay": "Sunday"
        },
        "type": "todo",
        "data": {
            "headline": "fsefef",
            "todos": [{
                "num": 1,
                "done": true,
                "text": "ewfewfwefe"
            }, {
                "num": 1,
                "done": false,
                "text": "ewfewfwefe"
            }, {
                "num": 1,
                "done": false,
                "text": "ewfewfwefe"
            }, {
                "num": 1,
                "done": true,
                "text": "ewfewfwefe"
            }, {
                "num": 1,
                "done": false,
                "text": "ewfewfwefe"
            }]
        },
        "color": "#ff9555",
        "order": false,
        "numOfTodos": 1
    }]



]


function emptyNote() {
    return {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'textComp',
        text: {
            headline: '',
            body: '',
        },
        color: null,
        order: false
    }
}

function addNote(note) {
    gNotes.unshift(note)
    // console.log('the updated gNotes now looks like this: ', gNotes)
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}



function getNotes() {
    var notes = utilService.loadFromLocalStorage(STORAGE_KEY)
    if (!notes || notes.length === 0) {
        console.log('the notes service got here')
        notes = gNotes
        utilService.saveToStorage(STORAGE_KEY, gNotes)
    }
    gNotes = notes;
    return Promise.resolve(gNotes);

}



export function deleteNote(noteid) {
    const noteToDelet = getNoteIdx(noteid)
    gNotes.splice(noteToDelet, 1)
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function copyNote(note) {
    gNotes.unshift(note)
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function getNoteIdx(noteid) {
    return gNotes.findIndex(note => {
        return note.id === noteid
    });
}

export function updateColor(val, note) {
    note.color = val;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function removePin(note) {
    note.order = false;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function addPin(note) {
    note.order = true;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function updateNote(note, body, headline) {
    note.text.body = body;
    note.text.headline = headline
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}
export function updateTodo(note, body, headline) {
    note.data.headline = body;
    note.data.todo.text = headline
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

export function updateTodoItem(note, i) {
    note.data.todos[i].done = !note.data.todos[i].done;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function emptyTodo() {
    return {
        id: utilService.makeId(),
        date: utilService.getCurrentTime(),
        type: 'todo',
        data: {
            headline: '',
            todos: [{
                num: 1,
                done: false,
                text: ''
            }, ]
        },
        color: null,
        order: false,
        numOfTodos: 1
    }

}


//     id: utilService.makeId(),
//     date: utilService.getCurrentTime(),
//     type: 'textComp',
//     text: {
//         headline: 'learn Vue',
//         body: 'next weekEnd',
//     },
//     color: '#ffffff',
//     order: 0
// },
// {
//     id: utilService.makeId(),
//     date: utilService.getCurrentTime(),
//     type: 'textComp',
//     text: {
//         headline: 'going to meetUp in tel aviv ',
//         body: 'on sunday at 18:00',
//     },
//     color: '#ffffff',
//     order: -1
// },
// {
//     id: utilService.makeId(),
//     date: utilService.getCurrentTime(),
//     type: 'textComp',
//     text: {
//         headline: 'shopping',
//         body: 'in rami levi',
//     },
//     color: '#ff0000',
//     order: 0
// },