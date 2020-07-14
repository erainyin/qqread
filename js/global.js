        // play_p0

        function playp0() {
            var radio_p0 = document.getElementById('mp3_p0');
            radio_p0.play();
            $("#btnplayp0").hide();
            $("#btnpausep0").show();
            radio_p0.loop = false;
            radio_p0.addEventListener('ended', function () {
                $("#btnpausep0").hide();
                $("#btnrepeatp0").show();
                $('#sp0').hide();
                $('#sp1').show();
                playp1();
            }, false);
        }

        function pausep0() {
            var radio_p0 = document.getElementById('mp3_p0');
            radio_p0.pause();
            $("#btnplayp0").show();
            $("#btnpausep0").hide();

        }

        function repeatp0() {
            var radio_p0 = document.getElementById('mp3_p0');
            radio_p0.pause();
            radio_p0.load();
            radio_p0.play();
            $("#btnrepeatp0").hide();
            $("#btnpausep0").show();

        }

        // play_p1

        function playp1() {
            var radio_p1 = document.getElementById('mp3_p1');
            radio_p1.play();
            $("#btnplayp1").hide();
            $("#btnpausep1").show();
            radio_p1.loop = false;
            radio_p1.addEventListener('ended', function () {
                $("#btnpausep1").hide();
                $("#btnrepeatp1").show();
                $('#sp1').hide();
                $('#sp2').show();
                playp2();
            }, false);
        }

        function pausep1() {
            var radio_p1 = document.getElementById('mp3_p1');
            radio_p1.pause();
            $("#btnplayp1").show();
            $("#btnpausep1").hide();

        }

        function repeatp1() {
            var radio_p1 = document.getElementById('mp3_p1');
            radio_p1.pause();
            radio_p1.load();
            radio_p1.play();
            $("#btnrepeatp1").hide();
            $("#btnpausep1").show();

        }

        // play_p2

        function playp2() {
            var radio_p2 = document.getElementById('mp3_p2');
            radio_p2.play();
            $("#btnplayp2").hide();
            $("#btnpausep2").show();
            radio_p2.loop = false;
            radio_p2.addEventListener('ended', function () {
                $("#btnpausep2").hide();
                $("#btnrepeatp2").show();
                $('#sp2').hide();
                $('#sp3').show();
                playp3();

            }, false);
        }

        function pausep2() {
            var radio_p2 = document.getElementById('mp3_p2');
            radio_p2.pause();
            $("#btnplayp2").show();
            $("#btnpausep2").hide();

        }

        function repeatp2() {
            var radio_p2 = document.getElementById('mp3_p2');
            radio_p2.pause();
            radio_p2.load();
            radio_p2.play();
            $("#btnrepeatp2").hide();
            $("#btnpausep2").show();

        }

        // play_p3

        function playp3() {
            var radio_p3 = document.getElementById('mp3_p3');
            radio_p3.play();
            $("#btnplayp3").hide();
            $("#btnpausep3").show();
            radio_p3.loop = false;
            radio_p3.addEventListener('ended', function () {
                $("#btnpausep3").hide();
                $("#btnrepeatp3").show();
                $('#sp3').hide();
                $('#sp4').show();
                playp4();

            }, false);
        }

        function pausep3() {
            var radio_p3 = document.getElementById('mp3_p3');
            radio_p3.pause();
            $("#btnplayp3").show();
            $("#btnpausep3").hide();

        }

        function repeatp3() {
            var radio_p3 = document.getElementById('mp3_p3');
            radio_p3.pause();
            radio_p3.load();
            radio_p3.play();
            $("#btnrepeatp3").hide();
            $("#btnpausep3").show();

        }


        // play_p4

        function playp4() {
            var radio_p4 = document.getElementById('mp3_p4');
            radio_p4.play();
            $("#btnplayp4").hide();
            $("#btnpausep4").show();
            radio_p4.loop = false;
            radio_p4.addEventListener('ended', function () {
                $("#btnpausep4").hide();
                $("#btnrepeatp4").show();
                $('#sp4').hide();
                $('#sp5').show();
                playp5();

            }, false);
        }

        function pausep4() {
            var radio_p4 = document.getElementById('mp3_p4');
            radio_p4.pause();
            $("#btnplayp4").show();
            $("#btnpausep4").hide();

        }

        function repeatp4() {
            var radio_p4 = document.getElementById('mp3_p4');
            radio_p4.pause();
            radio_p4.load();
            radio_p4.play();
            $("#btnrepeatp4").hide();
            $("#btnpausep4").show();

        }

        // play_p5

        function playp5() {
            var radio_p5 = document.getElementById('mp3_p5');
            radio_p5.play();
            $("#btnplayp5").hide();
            $("#btnpausep5").show();
            radio_p5.loop = false;
            radio_p5.addEventListener('ended', function () {
                $("#btnpausep5").hide();
                $("#btnrepeatp5").show();
                $('#sp5').hide();
                $('#sp6').show();
                playp6();

            }, false);
        }

        function pausep5() {
            var radio_p5 = document.getElementById('mp3_p5');
            radio_p5.pause();
            $("#btnplayp5").show();
            $("#btnpausep5").hide();

        }

        function repeatp5() {
            var radio_p5 = document.getElementById('mp3_p5');
            radio_p5.pause();
            radio_p5.load();
            radio_p5.play();
            $("#btnrepeatp5").hide();
            $("#btnpausep5").show();

        }

        // play_p6

        function playp6() {
            var radio_p6 = document.getElementById('mp3_p6');
            radio_p6.play();
            $("#btnplayp6").hide();
            $("#btnpausep6").show();
            radio_p6.loop = false;
            radio_p6.addEventListener('ended', function () {
                $("#btnpausep6").hide();
                $("#btnrepeatp6").show();
                $('#sp6').hide();
                $('#sp7').show();
                playp7();

            }, false);
        }

        function pausep6() {
            var radio_p6 = document.getElementById('mp3_p6');
            radio_p6.pause();
            $("#btnplayp6").show();
            $("#btnpausep6").hide();

        }

        function repeatp6() {
            var radio_p6 = document.getElementById('mp3_p6');
            radio_p6.pause();
            radio_p6.load();
            radio_p6.play();
            $("#btnrepeatp6").hide();
            $("#btnpausep6").show();

        }

        // play_p7

        function playp7() {
            var radio_p7 = document.getElementById('mp3_p7');
            radio_p7.play();
            $("#btnplayp7").hide();
            $("#btnpausep7").show();
            radio_p7.loop = false;
            radio_p7.addEventListener('ended', function () {
                $("#btnpausep7").hide();
                $("#btnrepeatp7").show();
                $('#sp7').hide();
                $('#sp8').show();
                playp8();

            }, false);
        }

        function pausep7() {
            var radio_p7 = document.getElementById('mp3_p7');
            radio_p7.pause();
            $("#btnplayp7").show();
            $("#btnpausep7").hide();

        }

        function repeatp7() {
            var radio_p7 = document.getElementById('mp3_p7');
            radio_p7.pause();
            radio_p7.load();
            radio_p7.play();
            $("#btnrepeatp7").hide();
            $("#btnpausep7").show();

        }

        // play_p8

        function playp8() {
            var radio_p8 = document.getElementById('mp3_p8');
            radio_p8.play();
            $("#btnplayp8").hide();
            $("#btnpausep8").show();
            radio_p8.loop = false;
            radio_p8.addEventListener('ended', function () {
                $("#btnpausep8").hide();
                $("#btnrepeatp8").show();
                $('#sp8').hide();
                $('#sp0').show();
            }, false);
        }

        function pausep8() {
            var radio_p8 = document.getElementById('mp3_p8');
            radio_p8.pause();
            $("#btnplayp8").show();
            $("#btnpausep8").hide();

        }

        function repeatp8() {
            var radio_p8 = document.getElementById('mp3_p8');
            radio_p8.pause();
            radio_p8.load();
            radio_p8.play();
            $("#btnrepeatp8").hide();
            $("#btnpausep8").show();

        }

        $("#btnpausep0, #btnrepeatp0").hide();
        $("#btnpausep1, #btnrepeatp1").hide();
        $("#btnpausep2, #btnrepeatp2").hide();
        $("#btnpausep3, #btnrepeatp3").hide();
        $("#btnpausep4, #btnrepeatp4").hide();
        $("#btnpausep5, #btnrepeatp5").hide();
        $("#btnpausep6, #btnrepeatp6").hide();
        $("#btnpausep7, #btnrepeatp7").hide();
        $("#btnpausep8, #btnrepeatp8").hide();

        function reset_position() {
            var hbody = $(window).height(); //整体文档内容高度
            var wbody = $(window).width(); //整体文档内容高度
            //获取页面高度宽度
            console.log(wbody, hbody);
            //调整图片高度宽度
            $('.slideImg').css({
                "height": hbody,
                "width": wbody
            });
            $('.btn').css({
                "width":wbody

        });

        }

        $(window).resize(function () {
            reset_position(); // 屏幕调整尺寸后重置元素位置
        });

        $(document).ready(function () {
            reset_position();

        });
