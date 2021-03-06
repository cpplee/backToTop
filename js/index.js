define(["require", "exports", "module"], function(e, t, n) {
	function s() {
		this.el = $("<div></div>").addClass("return_top_wrapper"), this.actionEl = $("<a></a>").attr({
			href: "javascript:void(0)",
			title: "杩斿洖椤堕儴"
		}).addClass("return_top_static"), this.runningEl = $("<a></a>").attr({
			href: "javascript:void(0)"
		}).addClass("return_top_running"), this.bottomDistance = 100, this.goTopTime = 800, this.hideDistance = 50, this.init()
	}
	var r = r || "",
		i = navigator.userAgent.indexOf("MSIE 6.0") !== -1;
	s.prototype = {
		init: function() {
			var e = this;
			$("<div></div>").appendTo(this.el), this.actionEl.appendTo(this.el), this.runningEl.appendTo(this.el), this.win = $(window), $(document).ready(function() {
				e.el.appendTo(document.body), e.scrollEvent()
			}), this.bindEvent()
		},
		bindEvent: function() {
			var e = this,
				t = _.throttle(e.scrollEvent, 400),
				n = _.throttle(e.resizeEvent, 400);
			this.win.scroll(function() {
				t.call(e)
			}), this.win.resize(function() {
				n.call(e)
			}), this.el.click(function(t) {
				if (e.isRunning) return;
				e.startRunning(), $("html, body").animate({
					scrollTop: 0
				}, e.goTopTime), e.el.animate({
					top: "-" + e.el.innerHeight()
				}, e.goTopTime, function() {
					e.endRunning()
				}), r && r.push(["_trackEvent", "涓荤珯鍙充晶鍥炲埌椤堕儴", "鍥炲埌椤堕儴鎸夐挳鐐瑰嚮娆℃暟"]), t.stopPropagation()
			})
		},
		startRunning: function() {
			this.isRunning = !0, this.actionEl.css("left", "-" + this.hideDistance + "px"), this.runningEl.css("left", 0)
		},
		endRunning: function() {
			this.isRunning = !1, this.runningEl.css("left", "-" + this.hideDistance + "px"), this.actionEl.css("left", 0)
		},
		scrollEvent: function() {
			var e = this.win.scrollTop(),
				t = document.documentElement.clientHeight,
				n = t - this.el.innerHeight() - this.bottomDistance,
				r = this;
			if (r.isRunning) return;
			e >= t ? i ? this.el.show().css({
				top: e + n
			}) : this.hasShow || (this.el.css({
				top: t
			}).show().animate({
				top: n
			}, 600), this.hasShow = !0) : (this.el.hide(), this.hasShow = !1)
		},
		resizeEvent: function() {
			var e = this.win.scrollTop(),
				t = document.documentElement.clientHeight,
				n = t - this.el.innerHeight() - this.bottomDistance;
			if (e < t) return;
			this.el.css({
				top: i ? e + n : n
			})
		}
	}, n.exports = new s
});