describe('ColonFilter', function () {
	var parser;
	beforeEach(function () {
		col = new ColonFilter();
	});

	it('should exist', function () {
		should.exist(col);
	});

	describe('getType(token)', function () {
		it('should return n', function () {
			col.getType(':n[2x+4]').should.equal('n');
		});

		it('should return l', function () {
			col.getType(':l[-2x+4]').should.equal('l');
		});
	});

	describe('getX0(token)', function () {
		it('should return 0', function () {
			col.getX0(':n[x]').should.equal('');
		});

		it('should return 1', function () {
			col.getX0(':n[x+1]').should.equal('1');
		});

		it('should return 25', function () {
			col.getX0(':n[x+25]').should.equal('25');
		});
	});

	describe('getTokenValue(token)', function () {
		// it('should return type', function () {
		//  col.getTokenValue(':n[2x+1]').type.should.equal('n');
		// });

		// it('should return x0', function () {
		//  col.getTokenValue(':n[2x+1]').x0.should.equal(1);
		// });

		// it('should return x0:0', function () {
		//  col.getTokenValue(':n[2x]').x0.should.equal(0);
		// });

		// it('should return x1:2', function () {
		//  col.getTokenValue(':n[2x+1]').x1.should.equal(2);
		// });

		// it('should return x1:0', function () {
		//  col.getTokenValue(':n[x]').x1.should.equal(1);
		// });

		// it('should return x0:2', function () {
		//  col.getTokenValue(':n[2]').x0.should.equal(2);
		// });

		// it('should return x1:0', function () {
		//  col.getTokenValue(':n[2]').x1.should.equal(0);
		// });

		// it('should return for lth values', function () {
		//  col.getTokenValue(':l[2x+1]').should.eql({
		//      type: 'l',
		//      x0: 1,
		//      x1: 2
		//  });
		// });

		// it('should return for lth with not x0', function () {
		//  col.getTokenValue(':l[2x]').should.eql({
		//      type: 'l',
		//      x0: 0,
		//      x1: 2
		//  });
		// });

		// it('should return for lth with no x1', function () {
		//  col.getTokenValue(':l[2]').should.eql({
		//      type: 'l',
		//      x0: 2,
		//      x1: 0
		//  });
		// });
	});

	describe('getFilterType(token)', function () {

	});

});