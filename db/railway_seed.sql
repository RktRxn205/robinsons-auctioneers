INSERT INTO branches (id, name, region) VALUES
  (1, 'West Midlands', 'West Midlands'),
  (2, 'Greater London', 'Greater London');

INSERT INTO customers (id, name, email, password_hash, preferred_branch_id, theme) VALUES
  ('cst-1001', 'Amelia Ward', 'amelia.ward@example.com', 'scrypt$0e704ddf8e9dad3bccc4d55f57dbceb6$0c9ac89b5df983662a42b15adf6cf2abbe7ab59f5588c4c2143c4517a8cfc16c090fea1ee37d0a70c5aa2ddf92a29820bf7bca74e5645d02c4b1844db0d97f32', 1, 'heritage'),
  ('cst-1002', 'Marcus Chen', 'marcus.chen@example.com', 'scrypt$f53c019bc6cc0a71def13a931521fd7e$845ef795772ce89673f6d14691e0d61f0e2d4bbe81257e9f5230605f337881916ad25d874b1e11f4a5df7ac9af28cc5037ad0ca86457f14c0f9c610bb39efbb1', 2, 'metropolitan');

INSERT INTO won_auctions
  (customer_id, branch_id, title, description, auction_date, final_bid, image_file, palette_json)
VALUES
  ('cst-1001', 1, 'Victorian walnut writing bureau', 'A restored late nineteenth-century bureau with brass fittings and fitted interior.', '2025-02-18', 1280, 'Antique writing desk with marquetry (25330750004).jpg', '["5b4636","d8bd8a","f4eee4"]'),
  ('cst-1001', 2, 'Omega Seamaster wristwatch', 'Stainless steel automatic watch with presentation case and service papers.', '2025-03-04', 2460, 'Omega-Seamaster-p1020460.jpg', '["1f2937","9ca3af","e5e7eb"]'),
  ('cst-1001', 1, 'Contemporary studio glass vase', 'Signed blue and amber blown glass piece from a regional studio collection.', '2025-04-12', 420, 'Art Deco Glass Vase (5795698484).jpg', '["0f766e","f59e0b","f7efe2"]'),
  ('cst-1001', 2, 'Georgian silver tea service', 'Four-piece hallmarked silver service with teapot, coffee pot, sugar bowl and milk jug.', '2025-05-09', 3120, 'State Gifts Silver Tea Service.JPG', '["374151","d1d5db","f9fafb"]'),
  ('cst-1001', 1, 'Edwardian emerald pendant', 'Gold pendant with central emerald, seed pearl surround and original fitted case.', '2025-05-31', 1740, 'Spanish jewellery-Gold and emerald pendant at VAM-01.jpg', '["064e3b","a7f3d0","ecfdf5"]'),
  ('cst-1001', 2, 'Signed coastal oil painting', 'Framed twentieth-century harbour scene with gallery label and provenance notes.', '2025-06-14', 890, 'Canaletto - The Grand Canal near the Rialto Bridge, Venice - Google Art Project.jpg', '["1e3a8a","93c5fd","eff6ff"]'),
  ('cst-1001', 1, 'Hand-knotted Persian rug', 'Large wool rug with central medallion design, deep red field and blue border.', '2025-07-03', 1360, 'Persian rug 1.jpg', '["7f1d1d","1d4ed8","fef3c7"]'),
  ('cst-1001', 2, 'Pair of bronze garden urns', 'Weathered cast bronze urns with classical handles and raised pedestal bases.', '2025-07-26', 980, 'Vase MET 160356.jpg', '["3f3f46","a16207","f5f5f4"]'),
  ('cst-1002', 2, 'First edition travel folio', 'Illustrated hardback folio with maps, plates and original dust jacket.', '2025-01-29', 760, 'The Small Travel Book.png', '["7f1d1d","d6b36a","f8f1df"]'),
  ('cst-1002', 2, 'Art deco diamond brooch', 'Platinum-set brooch with geometric mount and independent valuation certificate.', '2025-03-22', 3850, 'Gold and diamond bracelet.jpg', '["111827","d1d5db","ffffff"]'),
  ('cst-1002', 1, 'Mid-century teak sideboard', 'Danish-inspired four-door cabinet with shaped handles and tapered supports.', '2025-04-27', 940, 'G Plan Teak Sideboard.jpg', '["78350f","c0843c","f6e7c7"]'),
  ('cst-1002', 1, 'Leica M6 camera body', 'Classic 35mm rangefinder camera with light meter, body cap and leather strap.', '2025-05-17', 2210, 'Leica M6.jpg', '["111827","dc2626","f3f4f6"]'),
  ('cst-1002', 2, 'Moorcroft pottery lamp', 'Tube-lined floral table lamp with cream shade and maker mark to the base.', '2025-06-06', 520, 'Han Pottery Lamp (10352697545).jpg', '["164e63","f97316","fff7ed"]'),
  ('cst-1002', 2, 'Sapphire cluster ring', 'White gold ring with central sapphire, diamond halo and recent valuation paperwork.', '2025-06-25', 1880, 'Gold and diamond bracelet.jpg', '["1e1b4b","818cf8","eef2ff"]'),
  ('cst-1002', 1, 'Set of Chippendale chairs', 'Six carved mahogany dining chairs with drop-in upholstered seats.', '2025-07-11', 1470, 'Chair, after a design by Thomas Chippendale, V&A London 02.jpg', '["451a03","92400e","fffbeb"]'),
  ('cst-1002', 2, 'Modernist bronze sculpture', 'Abstract tabletop bronze with marble plinth, signed and numbered by the artist.', '2025-08-02', 2650, 'Vízivirág (Palotás József, 2001), 2017 Dunaújváros.jpg', '["292524","ca8a04","fafaf9"]');

INSERT INTO ongoing_auctions
  (branch_id, title, description, close_date, current_bid, bid_count, image_file, palette_json, status)
VALUES
  (2, 'Rolex Datejust 36 wristwatch', 'Steel and white gold automatic watch with Jubilee bracelet and box.', '2026-05-15', 5200, 18, 'Rolex Datejust 16013.jpg', '["0f172a","cbd5e1","f8fafc"]', 'active'),
  (1, '1960s Gibson acoustic guitar', 'Vintage six-string guitar with sunburst finish, hard case and repair history.', '2026-05-16', 2850, 11, '1918 The Gibson acoustic guitar.png', '["451a03","f59e0b","fff7ed"]', 'active'),
  (2, 'Chinese blue and white vase', 'Tall ceramic vase with floral panels, underglaze mark and display stand.', '2026-05-17', 1320, 9, 'Chinese - Blue and White Vase - Walters 491082 - Side B.jpg', '["1d4ed8","93c5fd","eff6ff"]', 'active'),
  (1, 'Diamond tennis bracelet', 'Eighteen-carat white gold bracelet with graduated round brilliant diamonds.', '2026-05-18', 4100, 22, 'Closeup tennis bracelet.jpg', '["374151","e5e7eb","ffffff"]', 'active'),
  (2, 'Banksy exhibition screen print', 'Limited edition print with certificate, framed behind museum-grade glass.', '2026-05-19', 7600, 31, 'Banksy Girl and Heart Balloon (2840632113).jpg', '["111827","ef4444","f9fafb"]', 'active'),
  (1, 'Regency mahogany dining table', 'Extending table with two leaves, reeded legs and brass castors.', '2026-05-20', 1680, 7, 'Dining table MET DP-14204-299.jpg', '["3f1d0b","a16207","fef3c7"]', 'active'),
  (2, 'Cartier leather jewellery case', 'Red leather travel case with fitted interior and gilt maker stamp.', '2026-05-21', 940, 13, 'Jewel box.JPG', '["7f1d1d","fca5a5","fff1f2"]', 'active'),
  (1, 'Pair of Murano glass lamps', 'Ribbed amber glass table lamps with brass fittings and new wiring.', '2026-05-22', 620, 6, 'Vase by Louis Comfort Tiffany, 1900-1905, blown Favrile glass - Portland Museum of Art - Portland, Maine - DSC04315.jpg', '["92400e","fbbf24","fffbeb"]', 'active'),
  (2, 'Vintage Louis Vuitton trunk', 'Monogram travel trunk with brass locks, leather trim and interior tray.', '2026-05-23', 6400, 26, 'LV Steamer Trunk.jpg', '["422006","b45309","fef3c7"]', 'active'),
  (1, 'Rare single malt whisky lot', 'Three sealed bottles from a private collection with original packaging.', '2026-05-24', 1950, 15, 'Single Malt Scotch Whisky (53224427012).jpg', '["431407","f97316","fff7ed"]', 'active');
